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
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoryComponent,
    PortfolioComponent,
    StreamComponent,
    UnitsComponent,
    SuperAdminComponent,
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
