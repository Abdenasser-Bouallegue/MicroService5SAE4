import { Injectable, Type } from '@angular/core';

export type UserType = 'GUEST' | 'STUDENT' | 'TEACHER' | 'RECRUITER' | 'DEPARTMENT' | 'ADMIN' | 'SUPERADMIN'; 

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  
  connectedUser: UserType;

  constructor() { 
    let user = localStorage.getItem('connectedUser');
    if(user == null){
      this.connectedUser = 'GUEST'
      localStorage.setItem('connectedUser', this.connectedUser)
    }
  }

  setConnectedUser(user: UserType){
    this.connectedUser = user;
    localStorage.setItem('connectedUser', this.connectedUser)
  }

  getConnectedUser(){
    let user = localStorage.getItem('connectedUser');
    if(user == null){
      this.connectedUser = 'GUEST'
      localStorage.setItem('connectedUser', this.connectedUser)
    }
    return this.connectedUser;
  }

}
