import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from '../models/annonce';
import { AnnonceService } from '../service/annonce.service';

@Component({
  selector: 'app-modifier-annonce',
  templateUrl: './modifier-annonce.component.html',
  styleUrls: ['./modifier-annonce.component.css']
})
export class ModifierAnnonceComponent implements OnInit {
  annonce:any
  ngForm:FormGroup
  updated: boolean;
  constructor(private activatedRoute:ActivatedRoute,private serAnnon:AnnonceService
    ,private f:FormBuilder,private router:Router) { }
  variable=this.activatedRoute.snapshot.params['id'];
  a:any
  get(){
    this.serAnnon.getAnnonce(this.variable).subscribe(data=>{
      console.log(data,"data");
      this.annonce=data.annonce
      console.log(this.annonce,"2");
      
      this.ngForm=this.annonce;
    });
   
  }
  ngOnInit(): void {
  this.get()
   console.log('titre :',this.get());
   
    this.ngForm=this.f.group({
      titre:['a'],
      poste:[''],
      type_emploi:[''],
      mots_cles:[''],
      niveau:[''],
      langue:[''],
      description:[''],
      experience:[''],
      date:['']
    })
  
 
    console.log(this.annonce,"1");
    
  
  
  }
  update(){
    this.serAnnon.updateAnnonce(this.annonce,this.variable).subscribe((data)=>{
      console.log(data);
       this.updated=true
       this.router.navigate(['annonce'])
      
    })
  }

}
