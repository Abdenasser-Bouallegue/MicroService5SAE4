import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesComponent } from './courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ChapterDetailsComponent } from './chapter-details/chapter-details.component';
import { AddChapterComponent } from './add-chapter/add-chapter.component';

const childrenRoutes: Routes = [
  {
    path: '',
    component: CoursesListComponent
  },
  {
    path: 'addcourse',
    component: AddCourseComponent
  },
  {
    path: 'addchapter',
    component: AddChapterComponent
  },
  {
    path: 'chapters/:chapterId',
    component: ChapterDetailsComponent
  },
  {
    path: ':courseId',
    component: CourseDetailsComponent
  }
]

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: childrenRoutes
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
