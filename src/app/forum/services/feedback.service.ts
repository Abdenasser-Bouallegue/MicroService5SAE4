import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { ITypeFeedback } from '../interf/feedback.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private rl = 'http://localhost:8090/feedback';


  constructor(private http: HttpClient) { }

      
  countRecbyCategory(): Observable<ITypeFeedback[]> {
    const url = `${this.rl}/countRec`; 
    return this.http.get<ITypeFeedback[]>(url)
    .pipe(map((data: ITypeFeedback[]) => data)
    );
  }


}
