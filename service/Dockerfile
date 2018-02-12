FROM openjdk:8-jre-alpine

MAINTAINER Alexander Orlov <alexander.orlov@intrafind.de>

ADD build/libs/*.jar svc/
COPY /home/alexander_orlov/docker-build-data/api-sitesearch/service/config/* svc/
ADD /home/alexander_orlov/docker-build-data/api-sitesearch/service/config/* svc/
ENV SPRING_CONFIG_NAME application,prod

EXPOSE 8001

CMD java -jar -Xms64m -Xmx64m svc/*.jar