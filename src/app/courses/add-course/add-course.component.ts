import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { GlobalApiService } from 'src/app/services/global-api.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  course: Course;

  constructor(
    private _api: GlobalApiService,
    private shareService: ShareDataService,
    private _fb: FormBuilder,
    private router: Router
  ) {}

  courseForm = new FormGroup({
    courseLabel: new FormControl('', [Validators.required]),
    courseDescription: new FormControl('', [Validators.maxLength(255)])
  });

  
  public get courseLabel() {
    return this.courseForm.get('courseLabel');
  }

  
  public get courseDescription() {
    return this.courseForm.get('courseDescription');
  }
  
  onSubmit(): void {
    this.course = {
      label: this.courseLabel.value,
      description: this.courseDescription.value
    }
    this._api.addCourse(this.course).subscribe(
      data => console.log(data)
    );
  }

  sendDataToService() {
    this.course = {
      label: this.courseLabel.value,
      description: this.courseDescription.value
    }
    this.shareService.setData(this.course);
    this.router.navigate(['/courses/addchapter']);
  }

}
