import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/service/annonce.service';
import { AuthentificationService } from 'src/app/service/auth-service.service';
import { CandidatService } from 'src/app/service/candidat.service';
import { RhService } from 'src/app/service/rh.service';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {

  compte : any;
  form:FormGroup;
idRh:any
tabAnnonce=[]
tabCandidat=[]

  constructor(private auth :AuthentificationService ,private router:Router,private candidatService:CandidatService ,private f:FormBuilder,private compteService:RhService,private token:TokenStorageService,private annonceSrevice:AnnonceService) { }

  ngOnInit(): void {
    this.idRh=this.token.getUser()._id;
    this.form=this.f.group({
      nom_societe:[''],
      adressEmail:[''],
      domaine_metier:[''],
      adresse:[''],
      tel:[''],
      password:['']
    })
    this.compteService.getRh(this.idRh).subscribe((n)=>{
      console.log('rh>>>>',n.email);
      
     
      
      this.compte=n
      this.tabAnnonce=this.compte.annonces
      this.tabCandidat=n.annonces.Candidats
      console.log('Tab Annonce',this.tabAnnonce);
      for (let i = 0; i < this.tabAnnonce.length; i++) {
        const element = this.tabAnnonce[i];
        this.annonceSrevice.getCandidat(element).subscribe((n)=>{
          this.tabCandidat.push(n);
        })
        
      }
      console.log('Tab Condidat',this.tabCandidat);
      
      console.log(n);
    })
  }

  modifierCompte(){
    this.compteService.updateRh(this.idRh,this.compte).subscribe((n)=>{
      console.log(n);
      this.token.saveUser(n)
      this.router.navigate(['/compte',this.idRh]).then(()=>{
        
        window.location.reload()
      })
    })
  }

  supprimerCompte(){
this.compteService.deleteRh(this.idRh).subscribe(()=>{});
for (let i = 0; i < this.tabAnnonce.length; i++) {
  const element = this.tabAnnonce[i];
  this.annonceSrevice.supprimerAnnonce(element).subscribe()
  
}
for (let i = 0; i < this.tabCandidat.length; i++) {
  const element = this.tabCandidat[i];
  this.candidatService.deleteCandidat(element).subscribe(()=>{
    
  });
  
}
alert('votre compte a éte supprimer');
    this.router.navigate(['/login'])

  }
  


}
 
