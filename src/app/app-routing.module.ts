import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FormulaireComponent } from './condidat/formulaire/formulaire.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PostComponent } from './admin/post/post.component';
import { SignupComponent } from './admin/dashboard/signup/signup.component';
import { GestionAnnonceComponent } from './admin/gestion-annonce/gestion-annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { ModifierAnnonceComponent } from './modifier-annonce/modifier-annonce.component';
import { CompteComponent } from './admin/compte/compte.component';
import { UpdateCompteComponent } from './admin/update-compte/update-compte.component';

const routes: Routes = [
  {path:'acceuil', component:HomeComponent},
  {path:'add_candidat/:id', component:FormulaireComponent},
  {path:'listAnnonce', component:ListAnnonceComponent},
  {path:'profils/:id', component:DashboardComponent},
{path:'compte/:id',component:CompteComponent},
{path:'modifier/:id',component:UpdateCompteComponent},
  {path:'about_us', component:AboutUsComponent},
  {path:'add_annonce/:id', component:PostComponent},
  {path:'update_annonce/:idf', component:ModifierAnnonceComponent},
  {path:'login', component:LoginComponent},
  {path:'annonce',component:GestionAnnonceComponent},
  {path:'signup',component:SignupComponent},
  {path:'modifAnnonce/:id',component:ModifierAnnonceComponent},
  {path:'',redirectTo:'acceuil',pathMatch:'full'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
