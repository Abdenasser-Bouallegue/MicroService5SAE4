import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { User2 } from '../models/User2';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8090/api/v1/users';


  baseUrl = "http://localhost:8090";

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<User[]>(this.baseUrl + "/user/getall")
  }

  adduser(user: User): Observable<Object> {
    return this.httpClient.post(this.baseUrl + "/user/add", user);
  }

  getUserByUsername(username: any) {
    return this.httpClient.get<User[]>(this.baseUrl + "/user/getbyusername/" + username)
  }
  GetlistUser(){
    
    return this.httpClient.get<any>(`${this.apiUrl}/allUser`);
  }
  getUserByUsername2(username: any){

    return this.httpClient.get<User[]>(`${this.apiUrl}/findbyName/${username}`)
  }
}
