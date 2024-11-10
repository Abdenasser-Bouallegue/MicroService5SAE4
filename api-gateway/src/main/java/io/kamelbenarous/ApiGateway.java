package io.kamelbenarous;

import jakarta.ws.rs.HttpMethod;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.GatewayFilterSpec;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@EnableDiscoveryClient
@SpringBootApplication
@CrossOrigin("*")
public class ApiGateway {
    public static void main(String[] args) {
        SpringApplication.run(ApiGateway.class, args);
    }

    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("dep-service",
                        r -> r.path("/lessons/getAllLessons")
                                .and().method(HttpMethod.GET)
                                .uri("lb://dep-service/lessons/getAllLessons")
                ).route(
                        "dep-service",
                        r -> r.path("/lessons/createLesson")
                                .and().method(HttpMethod.POST)
                                .uri("lb://dep-service/lessons/createLesson")
                ).route(
                        "dep-service",
                        r -> r.path("/lessons/getLesson/{id}")
                                .and().method(HttpMethod.GET)
                                .uri("lb://dep-service/lessons/getLesson")
                ).route(
                        "dep-service",
                        r -> r.path("/lessons/deleteLesson/{id}")
                                .and().method(HttpMethod.DELETE)
                                .uri("lb://dep-service/lessons/deleteLesson")
                ).route(
                        "dep-service",
                        r -> r.path("/lessons/updateLesson/{id}")
                                .and().method(HttpMethod.PUT)
                                .uri("lb://dep-service/lessons/updateLesson")
                )
                .build();
    }
}