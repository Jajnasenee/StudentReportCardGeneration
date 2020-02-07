import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
