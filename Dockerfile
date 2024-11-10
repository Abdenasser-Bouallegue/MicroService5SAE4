FROM openjdk:17
EXPOSE 0
ADD target/dep-service-dk.jar dep-service-dk.jar
ENTRYPOINT [ "java", "-jar", "dep-service-dk.jar" ]