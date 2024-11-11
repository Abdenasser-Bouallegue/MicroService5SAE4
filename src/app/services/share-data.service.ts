import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private course: Course = {label: "", description: ""};
  private data = new BehaviorSubject(this.course)
  currentData = this.data.asObservable();

constructor() { }

setData(data) {
 this.data.next(data);
}
}
