import { Injectable } from '@angular/core';
import { Quiz } from './models/quiz.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  

 
    constructor(private http: HttpClient) {}

  getAllQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`http://localhost:8090/api/quizzes/show`);
  }
  getQuizById(quizId: number): Observable<Quiz> {
    return this.http.get<Quiz>(`http://localhost:8090/api/quizzes/${quizId}`);
  }
  deleteQuiz(quizId: number): Observable<Quiz> {
    return this.http.delete<Quiz>(`http://localhost:8090/api/quizzes/${quizId}`);
  }
  createQuiz(quizData: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(`http://localhost:8090/api/quizzes/add`,quizData);

  }
  submitQuiz(quizId: number, answers: { questionId: number; selectedOptionId: number }[]): Observable<number> {
    const url = `http://localhost:8090/api/quizzes/${quizId}/submit`;
    return this.http.post<number>(url, answers);
  }
}
