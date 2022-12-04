import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';
import { AnnonceService } from 'src/app/service/annonce.service';
import { RhService } from 'src/app/service/rh.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-gestion-annonce',
  templateUrl: './gestion-annonce.component.html',
  styleUrls: ['./gestion-annonce.component.css']
})
export class GestionAnnonceComponent implements OnInit {
  ifRh:any
 annonces = []
tabIdAnnonces=[]
idRh:any
nom:any

  constructor(private RhService:RhService,private token:TokenStorageService,private AnnonceService:AnnonceService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
// window.location.reload()
this.nom=this.token.getUser().nom
    this.tabIdAnnonces=this.token.getUser().annonces
    console.log('Notre User',this.token.getUser());
    
this.idRh=this.token.getUser()._id
console.log(this.idRh);

 console.log('tab Id Annonce',this.tabIdAnnonces);

this.getAnnonces()



  }
  getAnnonces(){
    
    for (let i = 0; i < this.tabIdAnnonces.length; i++) {
      const element = this.tabIdAnnonces[i];
      this.AnnonceService.getAnnonce(element).subscribe((n)=>{
        console.log('Annonce : ',n);
        this.annonces.push(n);
       
      })
  
      
      
    }
  }

  supprimerAnnonce(id:any){
    const index = this.tabIdAnnonces.indexOf(id);
    if (index > -1) { // only splice array when item is found
      this.tabIdAnnonces.splice(index, 1); // 2nd parameter means remove one item only
    }
    this.RhService.updateRh(this.idRh,{annonces:this.tabIdAnnonces}).subscribe((n)=>{
      this.token.saveUser(n)
    });
    this.AnnonceService.supprimerAnnonce(id).subscribe((n)=>{
      window.location.reload();
    });
  }


}

