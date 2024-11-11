package io.gatway;

import jakarta.ws.rs.HttpMethod;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

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

                .route("feedback-service",
                        r -> r.path("/feedback/getAllFeedback")
                                .and().method(HttpMethod.GET)
                                .uri("lb://feedback-service/feedback/getAllFeedback")
                ).route(
                        "feedback-service",
                        r -> r.path("/feedback/addFeedback")
                                .and().method(HttpMethod.POST)
                                .uri("lb://feedback-service/feedback/addFeedback")
                ).route(
                        "feedback-service",
                        r -> r.path("/feedback/remove/{feedback-id}")
                                .and().method(HttpMethod.DELETE)
                                .uri("lb://feedback-service/feedback/remove")
                )
                .route(
                        "feedback-service",
                        r -> r.path("/feedback/{id}")
                                .and().method(HttpMethod.GET)
                                .uri("lb://feedback-service/feedback")
                )
                .route(
                        "feedback-service",
                        r -> r.path("/feedback/SetArchive/{id}")
                                .and().method(HttpMethod.PUT)
                                .uri("lb://feedback-service/feedback/SetArchive")
                ).route(
                        "feedback-service",
                        r -> r.path("/feedback/UnArchived/{id}")
                                .and().method(HttpMethod.PUT)
                                .uri("lb://feedback-service/feedback/UnArchived")
                ).route(
                        "feedback-service",
                        r -> r.path("/feedback/forward/{id}")
                                .and().method(HttpMethod.PUT)
                                .uri("lb://feedback-service/feedback/forward")
                ).route("forum-service",
                        r -> r.path("/myforum/getAllForum")
                                .and().method(HttpMethod.GET)
                                .uri("lb://forum-service/myforum/getAllForum")
                ).route("forum-service",
                        r -> r.path("/myforum/getForumById/{id}")
                                .and().method(HttpMethod.GET)
                                .uri("lb://forum-service/myforum/getForumById")
                ).route(
                        "forum-service",
                        r -> r.path("/myforum/addForum")
                                .and().method(HttpMethod.POST)
                                .uri("lb://forum-service/myforum/addForum")
                ).route(
                        "forum-service",
                        r -> r.path("/myforum/update")
                                .and().method(HttpMethod.PUT)
                                .uri("lb://forum-service/myforum/update")
                ).route(
                        "forum-service",
                        r -> r.path("/myforum/remove/{id}")
                                .and().method(HttpMethod.DELETE)
                                .uri("lb://forum-service/myforum/remove")
                )
                .route(
                        "forum-service",
                        r -> r.path("/myforum/like/{forum-id}")
                                .and().method(HttpMethod.POST)
                                .uri("lb://forum-service/myforum/like")
                ).route(
                        "forum-service",
                        r -> r.path("/myforum/dislike/{forum-id}")
                                .and().method(HttpMethod.POST)
                                .uri("lb://forum-service/myforum/dislike")
                ).route(
                        "forum-service",
                        r -> r.path("/myforum/filter/{title}")
                                .and().method(HttpMethod.GET)
                                .uri("lb://forum-service/myforum/filter")
                )
                .route(
                        "forum-service",
                        r -> r.path("/myforum/filterb/{body}")
                                .and().method(HttpMethod.GET)
                                .uri("lb://forum-service/myforum/filterb")
                ).route(
                        "forum-service",
                        r -> r.path("/myforum/countbydate")
                                .and().method(HttpMethod.GET)
                                .uri("lb://forum-service/myforum/countbydate")
                )//course
                .route("courses-service",
                        r -> r.path("/courses/getall")
                                .and().method(HttpMethod.GET)
                                .uri("lb://courses-service/courses/getall")
                ).route(
                        "courses-service",
                        r -> r.path("/courses/add")
                                .and().method(HttpMethod.POST)
                                .uri("lb://courses-service/courses/add")
                ).route(
                        "courses-service",
                        r -> r.path("/courses/{id}")
                                .and().method(HttpMethod.GET)
                                .uri("lb://courses-service/courses")
                )
                .route(
                        "courses-service",
                        r -> r.path("/courses/{courseId}")
                                .and().method(HttpMethod.DELETE)
                                .uri("lb://courses-service/courses")
                )
                //absence
                .route("absence-service",
                        r -> r.path("/absence/all")
                                .and().method(HttpMethod.GET)
                                .uri("lb://absence-service/absence/all")
                )
                .route("absence-service",
                        r -> r.path("/absence/add")
                                .and().method(HttpMethod.POST)
                                .uri("lb://absence-service/absence/add")
                )
                .route("absence-service",
                        r -> r.path("/absence/deleteAbsence/{idAbsence}")
                                .and().method(HttpMethod.DELETE)
                                .uri("lb://absence-service/absence/deleteAbsence")
                )
                .route(
                        "absence-service",
                        r -> r.path("/absence/getAbsence/{idAbsence}")
                                .and().method(HttpMethod.GET)
                                .uri("lb://absence-service/absence/getAbsence")
                )
//                .route(
//                        "absence-service",
//                        r -> r.path("/absence/updateAbsence")
//                                .and().method(HttpMethod.PUT)
//                                .uri("lb://absence-service/absence/updateAbsence")
//                )


                //dep
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
                )
                //
                .route("quiz-service",
                        r -> r.path("/quizzes/show")
                                .and().method(HttpMethod.GET)
                                .uri("lb://quiz-service/quizzes/show")
                )
                .build();
    }
}