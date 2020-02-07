import { SuperAdminComponent } from './super-admin/super-admin.component';
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
    path: 'home',
    component: SuperAdminComponent
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
