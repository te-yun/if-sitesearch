#!/usr/bin/env sh

#docker_network=sitesearch

#./gradlew build --build-cache --info -x test

#docker_tag=latest
#docker_image_name=if-sitesearch
#img_fqn=docker-registry.sitesearch.cloud/intrafind/${docker_image_name}:${docker_tag}

#cp -r /home/ubuntu/docker-build-data/api-sitesearch/service . # TODO remove? Is already defined as first step in CI.
#cd service
#docker build --tag intrafind/${docker_image_name}:${docker_tag} .
#cd ..

#docker rm -f ${docker_image_name}
#docker run -d --name ${docker_image_name} \
#    --log-driver=gelf \
#    --log-opt gelf-address=udp://localhost:12201 \
#    --env SIS_API_SERVICE_URL=$SIS_API_SERVICE_URL \
#    --env SERVICE_SECRET=$SERVICE_SECRET \
#    --env SIS_SERVICE_HOST=$SIS_SERVICE_HOST \
#    --env WOO_COMMERCE_CONSUMER_KEY="$WOO_COMMERCE_CONSUMER_KEY" \
#    --env WOO_COMMERCE_CONSUMER_SECRET="$WOO_COMMERCE_CONSUMER_SECRET" \
#    --env BASIC_ENCODED_PASSWORD="$BASIC_ENCODED_PASSWORD" \
#    --env ADMIN_SITE_SECRET=$ADMIN_SITE_SECRET \
#    --env INVISIBLE_RECAPTCHA_SITE_SECRET=${INVISIBLE_RECAPTCHA_SITE_SECRET} \
#    --env SPRING_SECURITY_USER_PASSWORD=$SPRING_SECURITY_USER_PASSWORD \
#    --env BUILD_NUMBER=$BUILD_NUMBER \
#    --env SCM_HASH=$SCM_HASH \
#    --env SECURITY_OAUTH2_CLIENT_CLIENT_SECRET=$SECURITY_OAUTH2_CLIENT_CLIENT_SECRET \
#    --network $docker_network \
#    intrafind/${docker_image_name}:${docker_tag}
#docker push ${img_fqn}

docker rm -f if-sitesearch
docker run -d --name if-sitesearch \
    --log-driver=gelf \
    --log-opt gelf-address=udp://localhost:12201 \
    --env SIS_API_SERVICE_URL=$SIS_API_SERVICE_URL \
    --env SERVICE_SECRET=$SERVICE_SECRET \
    --env SIS_SERVICE_HOST=$SIS_SERVICE_HOST \
    --env WOO_COMMERCE_CONSUMER_KEY="$WOO_COMMERCE_CONSUMER_KEY" \
    --env WOO_COMMERCE_CONSUMER_SECRET="$WOO_COMMERCE_CONSUMER_SECRET" \
    --env BASIC_ENCODED_PASSWORD="$BASIC_ENCODED_PASSWORD" \
    --env ADMIN_SITE_SECRET=$ADMIN_SITE_SECRET \
    --env INVISIBLE_RECAPTCHA_SITE_SECRET=${INVISIBLE_RECAPTCHA_SITE_SECRET} \
    --env SPRING_SECURITY_USER_PASSWORD=$SPRING_SECURITY_USER_PASSWORD \
    --env BUILD_NUMBER=$BUILD_NUMBER \
    --env SCM_HASH=$SCM_HASH \
    --env SECURITY_OAUTH2_CLIENT_CLIENT_SECRET=$SECURITY_OAUTH2_CLIENT_CLIENT_SECRET \
    --network sitesearch \
    intrafind/if-sitesearch:latest

#docker tag intrafind/if-sitesearch docker-registry.sitesearch.cloud/intrafind/if-sitesearch
#docker push docker-registry.sitesearch.cloud/intrafind/if-sitesearch

danglingImages=$(docker images -f "dangling=true" -q)
if [ "$danglingImages" ]; then
    docker rmi -f $danglingImages # cleanup, GC for dangling images
else
    echo "There are no dangling Docker images"
fi

docker volume prune -f
