import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { CategoryComponent } from './category/category.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StreamComponent } from './stream/stream.component';
import { UnitsComponent } from './units/units.component';

import { environment } from 'src/environments/environment';
import { BranchesComponent } from './branches/branches.component';
import { HocComponent } from './hoc/hoc.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ApplayoutComponent } from './_layout/applayout/applayout.component';
import { PubliclayoutComponent } from './_layout/publiclayout/publiclayout.component';
import { AddComponent } from './branches/add/add.component';
import { TablesComponent } from './tables/tables.component';
import { AddHocComponent } from './hoc/add-hoc/add-hoc.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { AddRcComponent } from './student/add-rc/add-rc.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoryComponent,
    PortfolioComponent,
    StreamComponent,
    UnitsComponent,
    BranchesComponent,
    HocComponent,
    StudentComponent,
    TeacherComponent,
    ApplayoutComponent,
    PubliclayoutComponent,
    AddComponent,
    TablesComponent,
    AddHocComponent,
    AddTeacherComponent,
    AddStudentComponent,
    AddRcComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent, AddComponent, AddHocComponent, AddTeacherComponent, AddStudentComponent]
})
export class AppModule { }
