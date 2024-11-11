import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITypeLesson } from '../interf/lesson.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private apiUrl = 'http://localhost:8090/api/lessons';


  constructor(private http: HttpClient) { }


  getLessonBySubj(): Observable<ITypeLesson[]> {
    const url = `${this.apiUrl}/getLessonBySub`; 
    return this.http.get<ITypeLesson[]>(url)
    .pipe(map((data: ITypeLesson[]) => data)
    );
  }
}
