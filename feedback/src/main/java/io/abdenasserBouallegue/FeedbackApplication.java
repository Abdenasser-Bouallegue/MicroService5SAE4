package io.abdenasserBouallegue;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;



@SpringBootApplication
@EnableDiscoveryClient
public class FeedbackApplication {

    public static void main(String[] args) {
        SpringApplication.run(FeedbackApplication.class, args);
    }


}