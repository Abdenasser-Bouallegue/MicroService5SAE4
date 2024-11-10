import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DepartementComponent } from './departement/departement.component';
import { ModifierDepartementComponent } from './modifier-departement/modifier-departement.component';
import { AjouterDepartementComponent } from './ajouter-departement/ajouter-departement.component';



const routes: Routes = [
   { path: 'auth',
               loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
              { path: 'home',
              component: HomeComponent},
 


  {
    path: 'courses',
    loadChildren: ()=>import('./courses/courses.module')
                      .then(m => m.CoursesModule)
  },
  {
    path: 'scheduler',
    loadChildren: () => import('./sheduler/sheduler.module')
                          .then(m => m.ShedulerModule)
  },
 

  


  //departement
  { path: 'departement', component: DepartementComponent },
  { path: 'modifierdepartement/:idLesson', component: ModifierDepartementComponent },
  { path: 'ajouterdepartement', component: AjouterDepartementComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
