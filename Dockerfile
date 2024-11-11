# First stage: Build the project
FROM openjdk:19-jdk-slim AS build

WORKDIR /app

# Install Maven
RUN apt-get update && apt-get install -y maven && rm -rf /var/lib/apt/lists/*

# Copy the entire project structure, including the parent POM and modules
COPY . .

# Build the api-gateway module only
RUN mvn -pl quiz dependency:go-offline package -DskipTests

# Second stage: Runtime image with JDK 19
FROM openjdk:19-jdk-slim

EXPOSE 8090

WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/api-gateway/target/*.jar app.jar

# Set the entry point to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
