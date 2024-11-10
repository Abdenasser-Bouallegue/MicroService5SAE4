import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { ChapterComponent } from './chapter/chapter.component';
import { CourseComponent } from './course/course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ChapterDetailsComponent } from './chapter-details/chapter-details.component';
import { ChaptersListComponent } from './chapters-list/chapters-list.component';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadFileComponent } from './upload-file/upload-file.component';


@NgModule({
  declarations: [
    AddCourseComponent,
    AddChapterComponent,
    ChapterComponent,
    CourseComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    ChapterDetailsComponent,
    ChaptersListComponent,
    CoursesComponent,
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [CoursesComponent]
})
export class CoursesModule { }
