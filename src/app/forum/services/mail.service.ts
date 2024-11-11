import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from '../models/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private url = 'http://localhost:8088/mailing/mymail'; // Updated URL

  constructor(private http: HttpClient) {}

  sendmail(formData: FormData): Observable<Mail> {
    return this.http.post<Mail>(`${this.url}/mailsended`, formData);
  }
}
