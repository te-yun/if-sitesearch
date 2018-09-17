#!/usr/bin/env sh

# Do not run! Not to the end tested! Bachka
# TODO: push to repo to finalize deployment

searchbarVersion=`date -u +"%Y-%m-%d"`

function init_and_set_CDN_metadata() {
    gsutil cors set cdn-cors-configuration.json gs://site-search-europe
    gsutil setmeta  -h "content-encoding"  gs://site-search-europe/searchbar/$searchbarVersion/app/css/app.css
    gsutil -m setmeta -r -h "Content-Encoding: gzip"  gs://site-search-europe/searchbar/$searchbarVersion
    gsutil -m acl -r ch -u AllUsers:READER gs://site-search-europe/searchbar/$searchbarVersion
    gsutil -m iam -r ch allUsers:objectViewer gs://site-search-europe/$searchbarVersion
}

mkdir -p $searchbarVersion/app
wget -O latestSearchbarRelease.xml http://ml-if-nexus:8081/repository/releases/com/intrafind/if-app-searchbar/maven-metadata.xml
sed -i '/<versions>/,/<\/versions>/d' latestSearchbarRelease.xml
latestRelease=$(cat latestSearchbarRelease.xml | sed -ne '/<release>/s#\s*<[^>]*>\s*##gp')
wget http://ml-if-nexus:8081/repository/releases/com/intrafind/if-app-searchbar/$latestRelease/if-app-searchbar-$latestRelease.war
unzip -qq if-app-searchbar-$latestRelease.war -d $searchbarVersion/app -x "META-INF/*" "WEB-INF/*"
rm if-app-searchbar-$latestRelease.war
rm -rf ./service/src/main/resources/static/searchbar/$searchbarVersion
mv $searchbarVersion/ ./service/src/main/resources/static/searchbar/
mv ./service/src/main/resources/static/searchbar/latestSearchbarRelease.xml ./service/src/main/resources/static/searchbar/oldSearchbarRelease.xml
mv latestSearchbarRelease.xml ./service/src/main/resources/static/searchbar/
oldReleaseDate=$(cat ./service/src/main/resources/static/searchbar/oldSearchbarRelease.xml | sed -ne '/<lastUpdated>/s#\s*<[^>]*>\s*##gp')
oldReleaseDate=${oldReleaseDate:0:8}
oldReleaseDate=`date -d $oldReleaseDate +'%Y-%m-%d'`
cp -r ./service/src/main/resources/static/searchbar/$oldReleaseDate/config/ ./service/src/main/resources/static/searchbar/$searchbarVersion/
cp -r ./service/src/main/resources/static/searchbar/$oldReleaseDate/gadget/ ./service/src/main/resources/static/searchbar/$searchbarVersion/
sed -i -e 's/$oldReleaseDate/$searchbarVersion/g' ./service/src/main/resources/static/searchbar/$searchbarVersion/config/sitesearch.json
sed -i -e 's/$oldReleaseDate/$searchbarVersion/g' ./service/src/main/resources/static/searchbar/$searchbarVersion/gadget/main.xml
sed -i -e 's/$oldReleaseDate/$searchbarVersion/g' ./service/src/main/resources/static/searchbar/integration.html
sed -i -e 's/$oldReleaseDate/$searchbarVersion/g' ./service/src/main/resources/static/searchbar/integration-migros.html
sed -i -e 's/$oldReleaseDate/$searchbarVersion/g' ./service/src/main/resources/static/searchbar/welt.de.html
sed -i -e 's/$oldReleaseDate/$searchbarVersion/g' ./service/src/main/resources/static/searchbar/welt.de.thumbnails.html

# Google Storage Operations

gsutil -m rm -r gs://site-search-europe/searchbar/$searchbarVersion
gsutil -m cp -r ./service/src/main/resources/static/searchbar/$searchbarVersion gs://site-search-europe/searchbar/

# transfer as gzip files to cdn with real metadata so that browser knows what to do with those gzip files
gsutil cp -z css -a public-read ./service/src/main/resources/static/searchbar/$searchbarVersion/app/css/app.css gs://site-search-europe/searchbar/$searchbarVersion/app/css/
gsutil cp -z js -a public-read ./service/src/main/resources/static/searchbar/$searchbarVersion/app/js/app.js gs://site-search-europe/searchbar/$searchbarVersion/app/js/
gsutil cp -z json -a public-read ./service/src/main/resources/static/searchbar/$searchbarVersion/config/sitesearch.json gs://site-search-europe/searchbar/$searchbarVersion/config/
