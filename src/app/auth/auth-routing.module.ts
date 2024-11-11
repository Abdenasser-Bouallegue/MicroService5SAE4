import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { QuestListComponent } from './quest-list/quest-list.component';
import { ProfilComponent } from './profil/profil.component';
import { ModifiermdpComponent } from './modifiermdp/modifiermdp.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BlockedComponent } from './blocked/blocked.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SocialProfilComponent } from './social-profil/social-profil.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ListAbsenceComponent } from './list-absence/list-absence.component';
import { StudentAbsenceComponent } from './student-absence/student-absence.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: ['SUPERADMIN', 'ADMIN', 'HEADOFDEPARTEMENT', 'STUDENT'],
    },
  },
  {
    path: 'questliste',
    component: QuestListComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['SUPERADMIN', 'ADMIN', 'HEADOFDEPARTEMENT'] },
  },
  {
    path: 'profile',
    component: ProfilComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: [
        'SUPERADMIN',
        'ADMIN',
        'HEADOFDEPARTEMENT',
        'STUDENT',
        'RECRUITER',
      ],
    },
  },
  {
    path: 'pwd',
    component: ModifiermdpComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: [
        'SUPERADMIN',
        'ADMIN',
        'HEADOFDEPARTEMENT',
        'STUDENT',
        'RECRUITER',
      ],
    },
  },
  {
    path: 'userliste',
    component: UserListComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['SUPERADMIN', 'ADMIN', 'HEADOFDEPARTEMENT'] },
  },
  {
    path: 'adduser',
    component: AddUserComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['SUPERADMIN', 'ADMIN', 'HEADOFDEPARTEMENT'] },
  },
  { path: 'userblocking', component: BlockedComponent },
  { path: 'accessdenied', component: AccessDeniedComponent },
  {
    path: 'dash',
    component: DashbordComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: [
        'SUPERADMIN',
        'ADMIN',
        'HEADOFDEPARTEMENT',
        
        'RECRUITER',
      ],
    },
  },
  {
    path: 'Socialprofil',
    component: SocialProfilComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: [
        'SUPERADMIN',
        'ADMIN',
        'HEADOFDEPARTEMENT',
        'STUDENT',
        'RECRUITER'
      ],
    },
  },
  {
    path: 'listestudent',
    component: StudentListComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: ['SUPERADMIN', 'ADMIN', 'HEADOFDEPARTEMENT',        'STUDENT'
    ],
    },
  },
  {
    path: 'absence',
    component: ListAbsenceComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: [
        'SUPERADMIN',
        'ADMIN',
        'HEADOFDEPARTEMENT',
        'STUDENT'
      ],
    },
  },
  {
    path: 'studentabsent',
    component: StudentAbsenceComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: [
        'SUPERADMIN',
        'ADMIN',
        'STUDENT',

        'HEADOFDEPARTEMENT'
      ],
    },
  },

  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
