import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent }, // Liste des cours
  { path: '', redirectTo: '/courses', pathMatch: 'full' }, 
  { path: 'coursesss', component: CourseListComponent },// Redirection par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
