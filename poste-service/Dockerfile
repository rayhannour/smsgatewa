FROM openjdk:11
EXPOSE 8086
EXPOSE 9096
ADD /target/poste-service-0.0.1-SNAPSHOT.jar poste-service.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-Dspring.profiles.active=docker","-Doracle.jdbc.timezoneAsRegion=false -Duser.timezone=Europe/London", "-jar","poste-service.jar"]