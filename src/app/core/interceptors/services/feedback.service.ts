// feedback.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from 'src/models/Feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'http://localhost:8090/feedback';

  constructor(private http: HttpClient) {}

  addFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(`${this.apiUrl}/addFeedback`, feedback, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
  getAllFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}/getAllFeedback`);

  }
  archiveFeedback(feedback: Feedback): Observable<any> {
    return this.http.put(`${this.apiUrl}/SetArchive/${feedback.idFeedback}`, feedback, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
  unarchivedFeedback(feedback: Feedback): Observable<any> {
    return this.http.put(`${this.apiUrl}/UnArchived/${feedback.idFeedback}`, feedback, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
  deleteFeedback(feedback: Feedback): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove/${feedback.idFeedback}`);
  }
  forwardFeedback(feedback: Feedback): Observable<any> {
    return this.http.put(`${this.apiUrl}/forward/${feedback.idFeedback}`, feedback, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
}
