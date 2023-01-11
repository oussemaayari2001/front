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

  constructor(private AnnonceService:AnnonceService,private candidatSer:CandidatService,private mailService:SendmailService,private activatedRoute:ActivatedRoute,private token:TokenStorageService) { }
  
   idannonce=this.activatedRoute.snapshot.params['id'];
  condidats=[]
  tabidcandidat=[]
cand:Condidat
rhmail:any
  ngOnInit(): void {
  this.rhmail=  this.token.getUser().email;
    
 this.getCondidatData()
 
 console.log('TAB ID CANDIDATS',this.tabidcandidat);
 
  }
// this.candidatSer.deleteCandidat(id).subscribe(res=>{
   // this.getCondidatData()
 // })
  Accepter(c:any){
   console.log( c);
   this.mailService.sendEmailaccepter(c).subscribe(()=>{
    alert("un mail d' acceptation a été envoyé ")
   })

  }
  refuser(c:any,id:any){
    
    this.mailService.sendEmailrefuserer(c).subscribe(()=>{
      alert("un mail de refus a été envoyé ")


console.log('id>>>',id);
console.log('tab condidat version 1',this.condidats);

for (let i = 0; i < this.condidats.length; i++) {
  const element = this.condidats[i];
  console.log('element >>',element.nom);
  
  this.tabidcandidat.push(element._id)
  
 }

      const index = this.tabidcandidat.indexOf(id);
      console.log('index :',index);
      
      if (index > -1) { // only splice array when item is found
        this.tabidcandidat.splice(index, 1); // 2nd parameter means remove one item only
      }
      console.log('tab condidat version 2',this.condidats);
      this.AnnonceService.updateAnnonce({Candidats:this.tabidcandidat},this.idannonce).subscribe((n)=>{
        
        this.candidatSer.deleteCandidat(id).subscribe((n)=>{
          window.location.reload();
        });
      });


// this.getCondidatData()







     })
 
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




