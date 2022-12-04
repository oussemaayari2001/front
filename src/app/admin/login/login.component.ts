import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthentificationService } from 'src/app/service/auth-service.service';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  username=''
  form : FormGroup;
  submitted = false;
  data : any;
  token : any;

  constructor(private authService: AuthentificationService, private tokenStorage: TokenStorageService,private fb:FormBuilder,private router:Router) { }

    loginForm(){
      this.form = this.fb.group({
        email : ['', [Validators.required, Validators.email]],
        password : ['', [Validators.required]]
      })
    }

  ngOnInit(): void {
    this.loginForm();
  }

  get f(){
    return this.form.controls;
  }

  submit(){  
    this.authService.login(this.form.value).subscribe(
      data => {
        console.log(this.form.value);
        
        console.log(data);
        
        
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log('user >>>>',this.tokenStorage.getUser().nom);
        this.username=data.nom
        this.isLoginFailed = false;
        this.isLoggedIn = true;
      
        setTimeout(() => {
            if (this.isLoggedIn) {
          this.router.navigate(['/annonce'])
        }
          
        }, 0);
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
