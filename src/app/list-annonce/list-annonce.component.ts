import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce';
import { AnnonceService } from '../service/annonce.service';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.css']
})
export class ListAnnonceComponent implements OnInit {

  constructor( private ser:AnnonceService) { }
  Annonces:Annonce[]
  ngOnInit(): void {
    this.getAnnonce();
    console.log(this.Annonces)
  }
  getAnnonce(){
    this.ser.getAnnonces().subscribe(data=>{ console.log(data);
     this.Annonces=data})
 };
}
