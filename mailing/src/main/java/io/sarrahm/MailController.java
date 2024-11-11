package io.sarrahm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("mymail")
public class MailController {

    private final MailingService mailingService;

    @Autowired
    public MailController(MailingService mailingService) {
        this.mailingService = mailingService;
    }

    @PostMapping("/mailsended")
    public ResponseEntity<String> mailsended( @RequestParam("to") String to,
                                              @RequestParam("subject") String subject,
                                              @RequestParam("body") String body) {

        this.mailingService.sendSimpleEmail(to, subject, body);
        return ResponseEntity.ok("{\"message\": \"Mail sent successfully!\"}");
    }
}
