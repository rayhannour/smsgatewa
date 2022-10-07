FROM openjdk:11
EXPOSE 8082
EXPOSE 9090
ADD /target/smgs-service-0.0.1-SNAPSHOT.jar smgs-service.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-Dspring.profiles.active=docker","-Doracle.jdbc.timezoneAsRegion=false -Duser.timezone=Europe/London", "-jar","smgs-service.jar"]