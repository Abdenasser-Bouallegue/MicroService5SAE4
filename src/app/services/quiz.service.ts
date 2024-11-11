// feedback.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../model/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://localhost:8090/quiz';

  constructor(private http: HttpClient) {}

  add(feedback: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(`${this.apiUrl}/add`, feedback, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
  getAll(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.apiUrl}/all`);

  }
  delete(feedback: Quiz): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${feedback.id}`);
  }
  update(University: Quiz): Observable<Quiz> {
    const url = `${this.apiUrl}/update`;
    return this.http.put<Quiz>(url, University);
  }
  getQuizById(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.apiUrl}/get/${id}`);
  }
}
