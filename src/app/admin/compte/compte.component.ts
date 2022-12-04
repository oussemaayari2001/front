import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  constructor(private tokenStorage:TokenStorageService) { }
  compte :any;
  idrh:any
  ngOnInit(): void {
    this.compte=this.tokenStorage.getUser()
    this.idrh=this.tokenStorage.getUser()._id
  }

}
