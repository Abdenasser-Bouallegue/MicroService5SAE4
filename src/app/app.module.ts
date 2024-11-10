import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseListComponent } from './course-list/course-list.component';  // Importez le module de routage ici

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule  // Ajoutez le module de routage ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
