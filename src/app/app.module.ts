import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FormulaireComponent } from './condidat/formulaire/formulaire.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PostComponent } from './admin/post/post.component';
import { SignupComponent } from './admin/dashboard/signup/signup.component';
import { GestionAnnonceComponent } from './admin/gestion-annonce/gestion-annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { ModifierAnnonceComponent } from './modifier-annonce/modifier-annonce.component';
import { RhComponent } from './rh/rh.component';
import { CompteComponent } from './admin/compte/compte.component';
import { UpdateCompteComponent } from './admin/update-compte/update-compte.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    FormulaireComponent,
    FooterComponent,
    AboutUsComponent,
    PostComponent,
    SignupComponent,
    GestionAnnonceComponent,
    ListAnnonceComponent,
    ModifierAnnonceComponent,
    RhComponent,
    CompteComponent,
    UpdateCompteComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
