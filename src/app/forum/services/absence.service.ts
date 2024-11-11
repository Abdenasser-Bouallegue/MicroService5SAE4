import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { ITypeAbsence } from '../interf/absence.interface';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {


  private apiUrl = 'http://localhost:8090/api/v1/absence';

  constructor(private http: HttpClient) { }

  countAbsbyDate(): Observable<ITypeAbsence[]> {
    const url = `${this.apiUrl}/abs`; 
    return this.http.get<ITypeAbsence[]>(url)
    .pipe(map((data: ITypeAbsence[]) => data)
    );
  }
}
