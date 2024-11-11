import { Component } from '@angular/core';
import { Mail } from '../forum/models/mail';
import { MailService } from '../forum/services/mail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
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
