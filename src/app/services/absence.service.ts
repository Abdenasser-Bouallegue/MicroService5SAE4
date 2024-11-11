// feedback.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Absence } from '../model/Absence';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  private apiUrl = 'http://localhost:8090/absence';

  constructor(private http: HttpClient) {}

  addAbs(absence: Absence): Observable<Absence> {
    return this.http.post<Absence>(`${this.apiUrl}/add`, absence, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
  getAllAbs(): Observable<Absence[]> {
    return this.http.get<Absence[]>(`${this.apiUrl}/all`);

  }

  deleteAbs(absence: Absence): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove/${absence.id}`);
  }
}
