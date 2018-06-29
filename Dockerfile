FROM openjdk:8-jdk as builder

MAINTAINER Alexander Orlov <alexander.orlov@intrafind.de>

WORKDIR /opt/builder
COPY . /opt/builder
RUN ./gradlew build --info

FROM openjdk:10-jre as service

WORKDIR /srv
COPY --from=builder /opt/builder/service/build/libs/*.jar .
COPY --from=builder /opt/builder/service/config config
COPY /root/.profile .
ENV SPRING_CONFIG_NAME application, prod

EXPOSE 8001

#CMD ["java", "-jar", "-Xms256m", "-Xmx256m", "/srv/*.jar"]
CMD ["java", "-jar", "-Xms256m", "-Xmx256m", "service.jar"]
#CMD java -jar -Xms256m -Xmx256m /srv/*.jar