# This file is a template, and might need editing before it works on your project.
FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]



