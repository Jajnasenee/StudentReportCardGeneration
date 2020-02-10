import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HocComponent } from './hoc/hoc.component';
import { BranchesComponent } from './branches/branches.component';
import { UnitsComponent } from './units/units.component';
import { StreamComponent } from './stream/stream.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { ApplayoutComponent } from './_layout/applayout/applayout.component';




const routes: Routes = [
  //Site routes goes here 
  {
    path: '',
    component: ApplayoutComponent,
    children: [
      {
        path: 'branches',
        component: BranchesComponent,
        // canActivate: [AngularFireAuthGuard]
      },
      {
        path: 'hoc',
        component: HocComponent,
        // canActivate: [AngularFireAuthGuard]
      },
      {
        path: 'teacher',
        component: TeacherComponent,
        // canActivate: [AngularFireAuthGuard]
      },
      {
        path: 'student',
        component: StudentComponent,
        // canActivate: [AngularFireAuthGuard]
      },

    ]
  },
  //no layout routes
  { path: 'login', component: LoginComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    // canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'stream',
    component: StreamComponent,
    // canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'units',
    component: UnitsComponent,
    // canActivate: [AngularFireAuthGuard]
  },

  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // },
  // { path: 'register', component: RegisterComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
