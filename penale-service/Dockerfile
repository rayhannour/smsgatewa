FROM openjdk:11
EXPOSE 8081
EXPOSE 9091
ADD /target/penale-service-0.0.1-SNAPSHOT.jar penale-service.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-Dspring.profiles.active=docker","-Doracle.jdbc.timezoneAsRegion=false -Duser.timezone=Europe/London", "-jar","penale-service.jar"]