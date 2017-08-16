FROM openjdk:8-jre-alpine

MAINTAINER Alexander Orlov <alexander.orlov@intrafind.de>

### execute as non-root user
#ENV APP_USER app_user
#RUN adduser -D -g $APP_USER $APP_USER
#USER $APP_USER
#WORKDIR /home/$APP_USER
### /execute as non-root user

ADD build/libs/*.jar svc/
ENV SPRING_CONFIG_NAME application,prod

VOLUME /home/svc_user/data
EXPOSE 8001

CMD java -jar -Xmx64m svc/*.jar