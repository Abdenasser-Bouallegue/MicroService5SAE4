package io.sarra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.ApplicationContext;
import org.springframework.mail.javamail.JavaMailSender;

@EnableDiscoveryClient
@SpringBootApplication
public class MailingApplication {
    @Autowired
    MailingService mailingService;
    @Autowired
    private JavaMailSender javaMailSender;

    public static void main(String[] args) {
      ApplicationContext context =  SpringApplication.run(MailingApplication.class, args);
        MailingApplication app=context.getBean(MailingApplication.class);

    }


}
