import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from './models/dep.model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private apiUrl = 'http://localhost:8090/api/lessons'; // Update with your API URL

  constructor(private http: HttpClient) { }

  getAllLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.apiUrl);
  }
  
}
