FROM openjdk:19-slim

EXPOSE 8091

COPY target/*.jar app.jar

LABEL authors="dori"

ENTRYPOINT ["java", "-jar","Service-absence-dk.jar"]
