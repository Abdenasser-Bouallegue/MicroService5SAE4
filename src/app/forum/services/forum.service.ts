import { Injectable } from '@angular/core';
import { Forum } from '../models/forum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITypeForum } from '../interf/forum.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private apiUrl = 'http://localhost:8090/myforum';




  constructor(private http: HttpClient) {}
  addForum(formData: FormData): Observable<Forum> {
    return this.http.post<Forum>(`${this.apiUrl}/addForum`, formData);
  }
  getAllForum(): Observable<Forum[]> {
    return this.http.get<Forum[]>(`${this.apiUrl}/getAllForum`);

  }

  deleteForum(forum: Forum): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove/${forum.idForum}`);
  }



  updateForum(updatedForum: Forum): Observable<Forum> {
    const url = `${this.apiUrl}/update`;
    return this.http.put<Forum>(url, updatedForum);
  }

  getForumById(idForum: number): Observable<Forum> {
    const url = `${this.apiUrl}/getForumById/${idForum}`;
    return this.http.get<Forum>(url);
  }


  getPostsByTitle(title: string): Observable<Forum[]> {
    const url = `${this.apiUrl}/filter/${title}`;
    return this.http.get<Forum[]>(url);
  }

  likeForum(idForum: number): Observable<any> {
    const url = `${this.apiUrl}/like/${idForum}`;
    return this.http.post<any>(url, null);}

  dislikeForum(idForum: number): Observable<any> {
      const url = `${this.apiUrl}/dislike/${idForum}`;
      return this.http.post<any>(url, null);}


            countforumbydate(): Observable<ITypeForum[]> {
        const url = `${this.apiUrl}/countbydate`; 
        return this.http.get<ITypeForum[]>(url)
        .pipe(map((data: ITypeForum[]) => data)
        );
      }
    
      

}
