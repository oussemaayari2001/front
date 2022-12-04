import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage-service.service';
const  URL="http://localhost:3000/rh";
@Injectable({
  providedIn: 'root'
})

export class RhService {

  constructor(private http:HttpClient,private token:TokenStorageService ) { }
  getRh(id:any){
    return this.http.get<any>(URL+"/"+ id);
  }
  updateRh(id:any,rh:any){
    return this.http.put<any>(URL+"/"+ id, rh);
  }
  deleteRh(id:any){
    return this.http.delete<any>(URL+"/"+ id);
  }
}
