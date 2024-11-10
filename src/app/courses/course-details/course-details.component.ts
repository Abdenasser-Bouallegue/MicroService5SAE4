import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/model/course';
import { GlobalApiService } from 'src/app/services/global-api.service';

@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{

  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private _api: GlobalApiService
  ){}

  ngOnInit(): void {
    this._api
    .getCourseById(this.route.snapshot.paramMap.get("courseId"))
    .subscribe(course => this.course = course);
  }
}
