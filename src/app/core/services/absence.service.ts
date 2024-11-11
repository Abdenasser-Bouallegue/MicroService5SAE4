import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { StudentAbsence } from '../models/StudentAbsence';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  private apiUrl = 'http://localhost:8090/api/v1/absence';

  constructor(private http: HttpClient) { }

  saveSelectedUsers(any): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}/save`, any)
   
  }
  getStudentAbsence(): Observable<StudentAbsence> {
    return this.http.get<StudentAbsence>(`${this.apiUrl}/all`);
  }
}
