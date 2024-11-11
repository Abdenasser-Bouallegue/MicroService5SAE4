# First stage: Build the project
FROM openjdk:19-jdk-slim AS build

WORKDIR /app

# Install Maven
RUN apt-get update && apt-get install -y maven && rm -rf /var/lib/apt/lists/*

# Copy only necessary files for caching
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the entire project and build it
COPY . .
RUN mvn clean package -DskipTests

# Second stage: Runtime image with JDK 19
FROM openjdk:19-jdk-slim

EXPOSE 8090

WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Set the entry point to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
