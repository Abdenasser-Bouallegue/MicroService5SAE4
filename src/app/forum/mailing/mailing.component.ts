import { Component } from '@angular/core';
import { Mail } from '../models/mail';
import { MailService } from '../services/mail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent {
  mails: Mail[] = [];

  constructor(private mailService: MailService, private router: Router) { }

  newMail: Mail = {
    idMail: null,
    to: null,
    subject: null,
    body: null,
  };

  onSubmit(): void {
    this.sendmail();
  }
  
  sendmail(): void {
  const formData = new FormData();
  formData.append('to', this.newMail.to);
  formData.append('subject', this.newMail.subject);
  formData.append('body', this.newMail.body);

  this.mailService.sendmail(formData).subscribe(
    (createdMail: Mail) => {
      console.log('mail sent successfully:', createdMail);
    },
    (error) => {
      console.error('Error :', error);
    }
  );
}

}
