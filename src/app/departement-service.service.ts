import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from 'src/Model/Lesson.model';

@Injectable({
  providedIn: 'root'
})
export class DepartementServiceService {

  private apiUrl = `http://localhost:8091/lessons`;


  constructor(private httpclient: HttpClient) {}


  getAllLessons(): Observable<Lesson[]> {
    return this.httpclient.get<Lesson[]>(`${this.apiUrl}/getAllLessons`);
  }

  getLesson(idLesson: number): Observable<Lesson> {
    return this.httpclient.get<Lesson>(`${this.apiUrl}/getLesson/${idLesson}`);
  }
    createLesson(lesson: Lesson): Observable<Lesson> {
      return this.httpclient.post<Lesson>(`${this.apiUrl}/createLesson`, lesson);
  }

  deleteLesson(id: number): Observable<void> {
    return this.httpclient.delete<void>(`${this.apiUrl}/deleteLesson/${id}`);
  }
  updateLesson(id: number, lesson:Lesson): Observable<Lesson> {
    return this.httpclient.put<Lesson>(
      `${this.apiUrl}/updateLesson/${id}`, lesson
    );
  }

  search(text: string): Observable<any> {
    return this.httpclient.get(`${this.apiUrl}/search?text=${text}`);
  }
  

  }

