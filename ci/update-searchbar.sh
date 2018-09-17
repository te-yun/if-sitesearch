#!/usr/bin/env sh

# Do not run! Not to the end tested! Bachka
# TODO: push to repo to finalize deployment
# TODO: compare release in oldSearchbarRelease.xml and latestSearchbarRelease.xml => if newer take today's date or take the oldReleaseDate as searchbarVersion


searchbarVersion=`date -u +"%Y-%m-%d"`

function get_latest_searchbar_release() {
    rm -rf $searchbarVersion
    mkdir -p $searchbarVersion/app
    wget -O latestSearchbarRelease.xml http://ml-if-nexus:8081/repository/releases/com/intrafind/if-app-searchbar/maven-metadata.xml
    sed -i '/<versions>/,/<\/versions>/d' latestSearchbarRelease.xml
    latestRelease=$(cat latestSearchbarRelease.xml | sed -ne '/<release>/s#\s*<[^>]*>\s*##gp')
    wget http://ml-if-nexus:8081/repository/releases/com/intrafind/if-app-searchbar/$latestRelease/if-app-searchbar-$latestRelease.war
    unzip -qq if-app-searchbar-$latestRelease.war -d $searchbarVersion/app -x "META-INF/*" "WEB-INF/*"
    rm if-app-searchbar-$latestRelease.war
}
get_latest_searchbar_release

function get_old_release_deployment_fragments() {
    rm -rf service/src/main/resources/static/searchbar/$searchbarVersion/
    mv $searchbarVersion/ service/src/main/resources/static/searchbar/
    mv service/src/main/resources/static/searchbar/latestSearchbarRelease.xml service/src/main/resources/static/searchbar/oldSearchbarRelease.xml
    mv latestSearchbarRelease.xml service/src/main/resources/static/searchbar/
    oldReleaseDate=$(cat service/src/main/resources/static/searchbar/oldSearchbarRelease.xml | sed -ne '/<lastUpdated>/s#\s*<[^>]*>\s*##gp')
    oldReleaseDate=${oldReleaseDate:0:8}
    oldReleaseDate=`date -d $oldReleaseDate +'%Y-%m-%d'`
    cp -r service/src/main/resources/static/searchbar/"$oldReleaseDate"/config/ service/src/main/resources/static/searchbar/"$searchbarVersion"/
    cp -r service/src/main/resources/static/searchbar/"$oldReleaseDate"/gadget/ service/src/main/resources/static/searchbar/"$searchbarVersion"/
}
get_old_release_deployment_fragments

function config_new_release_data() {
    sed -i -e "s/$oldReleaseDate/$searchbarVersion/g" service/src/main/resources/static/searchbar/"$searchbarVersion"/config/sitesearch.json
    sed -i -e "s/$oldReleaseDate/$searchbarVersion/g" service/src/main/resources/static/searchbar/"$searchbarVersion"/gadget/main.xml
    sed -i -e "s/$oldReleaseDate/$searchbarVersion/g" service/src/main/resources/static/searchbar/integration.html
}
config_new_release_data

#function init_gcloud(){
#    sudo apt install software-properties-common -y
#    sudo apt install curl -y
#    sudo apt update -y
#    export CLOUD_SDK_REPO="cloud-sdk-$(lsb_release -c -s)"
#    echo "deb http://packages.cloud.google.com/apt $CLOUD_SDK_REPO main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
#    curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
#    sudo apt-get update && sudo apt-get install google-cloud-sdk -y
#    sudo mkdir /srv/minion/
#    scp -r ichinnorovb@35.198.71.123:/srv/minion/compute-engine-admin.json /srv/minion/
#    gcloud auth activate-service-account --key-file=/srv/minion/compute-engine-admin.json
#    gcloud config set project woven-alpha-150909
#}
#init_gcloud

function deploy_searchbar_on_cdn() {
    gsutil -m rm -r gs://site-search-europe/searchbar/$searchbarVersion
    gsutil -m cp -r ./service/src/main/resources/static/searchbar/$searchbarVersion gs://site-search-europe/searchbar/
    gsutil cp -z css -a public-read ./service/src/main/resources/static/searchbar/$searchbarVersion/app/css/app.css gs://site-search-europe/searchbar/$searchbarVersion/app/css/
    gsutil cp -z js -a public-read ./service/src/main/resources/static/searchbar/$searchbarVersion/app/js/app.js gs://site-search-europe/searchbar/$searchbarVersion/app/js/
    gsutil cp -z json -a public-read ./service/src/main/resources/static/searchbar/$searchbarVersion/config/sitesearch.json gs://site-search-europe/searchbar/$searchbarVersion/config/
}
deploy_searchbar_on_cdn
