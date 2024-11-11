import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:8090/courses';  // URL de l'API Gateway

  constructor(private http: HttpClient) {}

  // Récupérer tous les cours via API Gateway
  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/getall`);
  }

  // Ajouter un nouveau cours via API Gateway
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}/add`, course, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

  // Mettre à jour un cours via API Gateway
  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.baseUrl}/update/${course.id}`, course, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}) // Optionnel selon besoin
    });
  }

  // Supprimer un cours via API Gateway
  deleteCourse(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
