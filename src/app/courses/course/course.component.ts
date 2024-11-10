import { Component, Input } from '@angular/core';
import { Course } from 'src/app/model/course';
import { GlobalApiService } from 'src/app/services/global-api.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input("course")
  course: Course;

  constructor(
    private _api: GlobalApiService
  ){}

  deleteCourse(){
    this._api.deleteCourse(this.course.id).subscribe((data) => console.log(data))
  }
}
