import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  jwt_decode from 'jwt-decode';
import { AuthentificationService } from '../service/auth-service.service';
import { TokenStorageService } from '../service/token-storage-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: any;
  userData : any;
  email:any;
display:any=false
idrh:any
username:any
  isLoggedIn: boolean=false;
  constructor(private tokenStorageService:TokenStorageService,private router : Router,private authservice:AuthentificationService,private tokenstorage:TokenStorageService) { }

  ngOnInit(): void {
    console.log(this.tokenstorage.getUser()._id);
    this.idrh=this.tokenstorage.getUser()._id;
    this.username=this.tokenstorage.getUser().nom
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.email = this.userData.email;
    console.log(this.token);
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log('loged in >>',this.isLoggedIn);
    
  
  }

  logout(){
    window.sessionStorage.clear()
    this.authservice.logout();
    this.router.navigate(['/login']);
  }

}
