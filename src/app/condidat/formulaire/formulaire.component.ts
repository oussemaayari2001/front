import { Component, OnInit, ViewChild } from '@angular/core';
import { Condidat } from '../../models/condidat.model';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatService } from 'src/app/service/candidat.service';
import { AnnonceService } from 'src/app/service/annonce.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit {

  @ViewChild("dashboard") dashboard: DashboardComponent;
  condidat = new Condidat();
  selectedType = 'openType';
  form:FormGroup;
  isUpdated=false;
  nom=''
  
idc:any;
onChange(event) {
  this.selectedType = event.target.value;
}
  constructor( private f:FormBuilder,private candidatSer:CandidatService,private AnnonceService:AnnonceService,private activatedRoute:ActivatedRoute) { }
idAnnonce:any
tabCandidat=[]
  ngOnInit(): void {
    this.idAnnonce=this.activatedRoute.snapshot.params['id'];
    this.form=this.f.group({
      nom:[''],
      email:['',Validators.email],
      profil:[''],
      linkedIn:[''],
      niveau:[''],
      ecole_de_licence:[''],
      ecole_ingenieur:[''],
      ecole_master:[''],
      competence:[''],
      grade:[''],
      file:['']
    })
   
  }

  insertData(){
    this.candidatSer.addCandidat(this.condidat).subscribe(data=>{console.log('Candidat >>',data);
      this.idc=data._id
      this.nom=data.nom

////2

this.AnnonceService.getAnnonce(this.idAnnonce).subscribe((d)=>{      
  this.tabCandidat=d.annonce.Candidats
  console.log('Tab Version 1',this.tabCandidat);
  
  this.tabCandidat.push(this.idc)
  console.log('Tab Version 2',this.tabCandidat);


 /////3
 this.AnnonceService.updateAnnonce({Candidats:this.tabCandidat},this.idAnnonce).subscribe((n)=>{
  console.log(n);
  
  console.log(n,"annonce aprés l'update");
  this.isUpdated=true
  })

  
  }

  ) 
 
    });

  




 
   
  
  }
}
