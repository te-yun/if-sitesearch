FROM openjdk:10-jdk as builder

MAINTAINER Alexander Orlov <alexander.orlov@intrafind.de>

WORKDIR /opt/builder
COPY . /opt/builder
RUN ./gradlew build --build-cache --info -x test

FROM openjdk:10-jre as service

WORKDIR /srv
COPY --from=builder /opt/builder/service/build/libs/*.jar .
COPY --from=nginx:latest /etc/nginx/nginx.conf /opt/nginx.conf
#COPY /home/ubuntu/docker-build-data/api-sitesearch/service/config .
COPY service/config .
COPY service/config fromLocalService-Config
COPY --from=builder /opt/builder/service/config fromBuilderStage
ENV SPRING_CONFIG_NAME application, prod

EXPOSE 8001

#CMD ["java", "-jar", "-Xms256m", "-Xmx256m", "/srv/*.jar"]
CMD ["java", "-jar", "-Xms256m", "-Xmx256m", "service.jar"] 
#CMD java -jar -Xms256m -Xmx256m /srv/*.jar