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




const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'stream',
    component: StreamComponent
  },
  {
    path: 'units',
    component: UnitsComponent
  },
  {
    path: 'branches-SuperAdmin',
    component: BranchesComponent
  },
  {
    path: 'hoc-SuperAdmin',
    component: HocComponent
  },
  {
    path: 'teacher-SuperAdmin',
    component: TeacherComponent
  },
  {
    path: 'student-SuperAdmin',
    component: StudentComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
