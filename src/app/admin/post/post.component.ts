import { Component, OnInit, ViewChild } from '@angular/core';
import { Annonce } from 'src/app/models/annonce';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AnnonceService } from 'src/app/service/annonce.service';
import { RhService } from 'src/app/service/rh.service';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  annonce = new Annonce();
  form: FormGroup;
  ida: any;
  tabAnnonces=[]
  msg:any
idRh:any
  isUpdated: boolean;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private f:FormBuilder,private annonceSer:AnnonceService,private RhService:RhService,private token:TokenStorageService,) { }

  ngOnInit(): void {
    this.idRh=this.activatedRoute.snapshot.params['id']
    this.form=this.f.group({
      titre:[''],
      poste:[''],
      type_emploi:[''],
      mots_cles:[''],
      niveau:[''],
      langue:[''],
      description:[''],
      experience:[''],
      date:['']
    })
  }















  insertData3(){
    this.annonce.date_dajout=new Date().getDate()+'/'+parseInt((new Date().getMonth()+1).toString())+'/'+new Date().getFullYear()
    this.annonceSer.addAnnonce(this.annonce).subscribe(data=>{console.log('Annonce >>',data);
   
    
      this.ida=data.annonce._id
      console.log(this.ida);

////2

this.RhService.getRh(this.idRh).subscribe((d)=>{  
  console.log(d);
      
  this.tabAnnonces=d.annonces
  console.log('Tab Version 1',this.tabAnnonces);
  
  this.tabAnnonces.push(this.ida)
  console.log('Tab Version 2',this.tabAnnonces);


 /////3
 this.RhService.updateRh(this.idRh,{annonces:this.tabAnnonces}).subscribe((n)=>{
 
 this.token.saveUser(n)
  console.log(n,"Rh aprés l'update");
this.router.navigate(['/annonce'])
  })

  
  }

  ) 
 
    });

  




 
   
  
  }

















 
}
