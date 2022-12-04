import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';
import { AuthentificationService } from 'src/app/service/auth-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSuccessful=false
  errorMessage: any;
  isSignupFailed: boolean;
  constructor(private authService: AuthentificationService, private tokenStorage: TokenStorageService,private fb:FormBuilder) { }
  form:FormGroup=this.fb.group({

    nom:[''],

  email:[''],
  password:[''],
  domaineMetier:[''],
  adresse:[''],
  tel:['']

  })
submit(){
  this.authService.register(this.form.value).subscribe((data)=>{
    console.log(data);
    if (data.err) {
      this.errorMessage = data.err;
      this.isSignupFailed = true;
    } else {
      this.isSuccessful=true
    }
    
  },

    
    err => {
   
    }
    
  )

}
  ngOnInit(): void {
  }

}
