import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { QuestListComponent } from './quest-list/quest-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { ModifiermdpComponent } from './modifiermdp/modifiermdp.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BlockedComponent } from './blocked/blocked.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SocialProfilComponent } from './social-profil/social-profil.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ListAbsenceComponent } from './list-absence/list-absence.component';
import { StudentAbsenceComponent } from './student-absence/student-absence.component';
import { SignaturePadModule } from 'angular2-signaturepad';


@NgModule({
  declarations: [
   LoginComponent,
   RegisterComponent,
   WelcomeComponent,
   QuestListComponent,
   NavbarComponent,
   ProfilComponent,
   ModifiermdpComponent,
   FooterComponent,
   UserListComponent,
   AddUserComponent,
   BlockedComponent,
   AccessDeniedComponent,
   DashbordComponent,
   SidebarComponent,
   SocialProfilComponent,
   StudentListComponent,
   ListAbsenceComponent,
   StudentAbsenceComponent

  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SignaturePadModule
  ]
})
export class AuthModule { }
