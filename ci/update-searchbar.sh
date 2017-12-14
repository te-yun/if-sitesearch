#!/usr/bin/env sh

# TODO team productize

today=`date -u +"%Y-%m-%d"`
cd service/src/main/resources/static/searchbar/build
rm searchbar-latest.zip
curl http://nexus:8081/nexus/service/local/repositories/snapshots/content/com/intrafind/if-app-searchbar/5.1.3.2-SNAPSHOT/if-app-searchbar-5.1.3.2-20171214.081958-18.zip \
    -o searchbar-latest.zip

rm -rf if-app-searchbar-*
unzip searchbar-latest.zip
mkdir ../$today
mv if-app-searchbar-* ../$today/app
cp -r ../latest/config ../$today
cp -r ../latest/gadget ../$today