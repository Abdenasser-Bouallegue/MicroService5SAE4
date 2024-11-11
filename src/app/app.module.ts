import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { ChatComponent } from './chat/pages/chat/chat.component';
import { MainComponent } from './chat/pages/main/main.component';
import { UserComponent } from './chat/pages/user/user.component';
import { ShedulerModule } from './sheduler/sheduler.module';
import { FeedbackComponent } from './feedback/feedback/feedback.component';
import { FeedbackAdminComponent } from './feedback/feedback-admin/feedback-admin.component';
import { FeedbackArchivedComponent } from './feedback/feedback-archived/feedback-archived.component';
import { MyfeedbackComponent } from './feedback/myfeedback/myfeedback.component';
import { FeedbackAboutMeComponent } from './feedback/feedback-about-me/feedback-about-me.component';
import { VideoCallComponent } from './feedback/video-call/video-call.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ForumComponent } from './forum/forum/forum.component';
import { ShowForumComponent } from './forum/show-forum/show-forum.component';
import { ForumadminComponent } from './forum/forumadmin/forumadmin.component';
import { MailingComponent } from './forum/mailing/mailing.component';
import { AdmindashComponent } from './forum/admindash/admindash.component';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { RecruiterQuizComponent } from './quiz/recruiter-quiz/recruiter-quiz.component';
import { TakeQuizComponent } from './quiz/take-quiz/take-quiz.component';
import { TestPageComponent } from './quiz/test-page/test-page.component';
import { CreateQuizComponent } from './quiz/create-quiz/create-quiz.component';
import { QuizScoreComponent } from './quiz/quiz-score/quiz-score.component';
import { DepCourseComponent } from './quiz/dep-course/dep-course.component';
import { ClassesDepComponent } from './quiz/classes-dep/classes-dep.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddAbsenceComponent } from './add-absence/add-absence.component';
import { AllAbsencesComponent } from './all-absences/all-absences.component';
import { AddquizComponent } from './addquiz/addquiz.component';
import { AllQuizComponent } from './all-quiz/all-quiz.component';
import { NavComponent } from './nav/nav.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MailComponent } from './mail/mail.component';
import { AjouterDepartementComponent } from './ajouter-departement/ajouter-departement.component';
import { ModifierDepartementComponent } from './modifier-departement/modifier-departement.component';
import { DepartementComponent } from './departement/departement.component';



export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MainComponent,
    UserComponent,
    FeedbackComponent,
    FeedbackAdminComponent,
    FeedbackArchivedComponent,
    MyfeedbackComponent,
    FeedbackAboutMeComponent,
    VideoCallComponent,
    ForumComponent,
    ShowForumComponent,
    ForumadminComponent,
    MailingComponent,
    AdmindashComponent,
    QuizComponent,
    RecruiterQuizComponent,
    TakeQuizComponent,
    TestPageComponent,
    CreateQuizComponent,
    QuizScoreComponent,
    DepCourseComponent,
    ClassesDepComponent,
    AddAbsenceComponent,
    AllAbsencesComponent,
    AddquizComponent,
    AllQuizComponent,
    NavComponent,
    CoursesComponent,
    CourseListComponent,
    MailComponent,
    AjouterDepartementComponent,
    ModifierDepartementComponent,
    DepartementComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CommonModule,

    AuthModule,
    CoreModule,
    ShedulerModule,
    SignaturePadModule,
    BrowserAnimationsModule,

    MatDialogModule,


    ToastrModule.forRoot({
      timeOut:3000,
      progressBar:true,
      progressAnimation:'increasing',
      preventDuplicates :true,
      enableHtml: true,
    }),ReactiveFormsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['http://localhost:8082'],
        disallowedRoutes: ['http://localhost:8082/api/v1/auth/authenticate','http://localhost:8082/api/v1/quest/add','http://localhost:8082/api/v1/users/alluser'],
      }
    })
  ],
  providers: [],

  // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  bootstrap: [AppComponent]
})
export class AppModule { }
