FROM openjdk:8-jre-alpine

MAINTAINER Alexander Orlov <alexander.orlov@intrafind.de>

### execute as non-root user
#ENV SVC_USR svc_usr
#RUN adduser -D -g $SVC_USR $SVC_USR
#USER $SVC_USR
#WORKDIR /home/$SVC_USR
### /execute as non-root user

ADD build/libs/*.jar svc/
ENV SPRING_CONFIG_NAME application,prod

#VOLUME /home/svc_usr/data
VOLUME /data
EXPOSE 8001

CMD java -jar -Xmx64m svc/*.jar