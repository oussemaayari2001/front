import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private token:TokenStorageService) { }
username:any
mail:any
tel:any
adresse:any
  ngOnInit(): void {
  this.username=  this.token.getUser().nom
  this.mail=this.token.getUser().email
  this.tel=this.token.getUser().tel
  this.adresse=this.token.getUser().adresse
  }

}
