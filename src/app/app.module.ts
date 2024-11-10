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

import { CoursesModule } from './courses/courses.module';
import { ShedulerModule } from './sheduler/sheduler.module';

import { SignaturePadModule } from 'angular2-signaturepad';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { DepartementComponent } from './departement/departement.component';
import { ModifierDepartementComponent } from './modifier-departement/modifier-departement.component';
import { AjouterDepartementComponent } from './ajouter-departement/ajouter-departement.component';



export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent,
    ModifierDepartementComponent,
    AjouterDepartementComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AuthModule,
    CoreModule,
    CoursesModule,
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
  providers:[{ provide: LocationStrategy, useClass: HashLocationStrategy }],

  // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  bootstrap: [AppComponent]
})
export class AppModule { }
