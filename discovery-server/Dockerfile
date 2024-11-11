# Start with a base image containing Java runtime
FROM openjdk:17-jdk-slim

EXPOSE 8761

WORKDIR /app

COPY target/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]