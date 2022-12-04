import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Condidat } from 'src/app/models/condidat.model';

import { CandidatService } from 'src/app/service/candidat.service';
import { SendmailService } from 'src/app/service/sendmail.service';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';
import { AnnonceService } from 'src/app/service/annonce.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private AnnonceService:AnnonceService,private candidatSer:CandidatService,private http:SendmailService,private activatedRoute:ActivatedRoute,private token:TokenStorageService) { }
  
   idannonce=this.activatedRoute.snapshot.params['id'];
  condidats=[]
cand:Condidat

  ngOnInit(): void {
 this.getCondidatData()
 
  }
// this.candidatSer.deleteCandidat(id).subscribe(res=>{
   // this.getCondidatData()
 // })
  Accepter(c){
   console.log( c["email"]);
   this.http.sendEmail( c).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${c.nom} is successfully register and mail has been sent with ${res} }`
        );
      },
      err => {
        console.log(err);
       
      }
    );

  }
  getCondidatData(){
    this.AnnonceService.getCandidat(this.idannonce).subscribe((data)=>{
      console.log(data);
      
for (let i = 0; i < data.length; i++) {
  const element = data[i];
  this.candidatSer.getCandidat(element).subscribe((n)=>
  {console.log(n);
  
    this.condidats.push(n);
  }
  
  // this.condidats.push(JSON.parse(data.toString()))
  )
  
}
    })
     
    };
annuler(){
this.AnnonceService.getCandidat(this.idannonce).subscribe((n)=>{
  for (let i = 0; i < n.length; i++) {
    const element = n[i];
    this.candidatSer.getCandidat(element).subscribe((d)=>{
this.condidats[i]=d
    })
  }
  
  
})  
}
    filtrer(){

console.log(this.token.getUser()._id);

let obj={'idAnnonce':this.idannonce,'idRh':this.token.getUser()._id};
console.log(obj);

this.candidatSer.filtrerCandidats(obj).subscribe((n)=>{
  console.log(n);
  
  this.condidats=n
  console.log(this.condidats);
  
});
    }
  }




