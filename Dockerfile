FROM openjdk:jre-alpine

MAINTAINER Alexander Orlov <alexander.orlov@intrafind.de>

### execute as non-root user
ENV APP_USER app_user
RUN adduser -D -g $APP_USER $APP_USER
USER $APP_USER
WORKDIR /home/$APP_USER
### /execute as non-root user

ADD build/libs/*.jar app/
#ENV SPRING_CONFIG_NAME prod,local,config

CMD java -jar -Xmx64m app/*.jar
#CMD ["java", "-jar", "-Xmx64m", "app/if-sitesearch-1.0.0.jar"]