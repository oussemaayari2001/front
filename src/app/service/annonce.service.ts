import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annonce } from '../models/annonce';
import { TokenStorageService } from './token-storage-service.service';
const  URLRh="http://localhost:3000/rh/annonces/";
const  URL="http://localhost:3000/annonce/";
const  URL2="http://localhost:3000/annonce/rh";
@Injectable({
  providedIn: 'root'
})

export class AnnonceService {
 
  constructor(private http:HttpClient,private token:TokenStorageService  ) { }

  addAnnonce(a:any):Observable<any>{
  
    return this.http.post<any>(URL,a);
    }
   
    getAnnonces():Observable<any[]>{
      return this.http.get<any[]>(URL);
        }
   
      getAnnonceById(id:any){
        return this.http.get<Annonce>(URL+"/"+ id);
        }

     
        getIdAnnoncesByIdRh(idRh:any){
          return this.http.get<any>(URLRh+"/"+ idRh);
          }
    
          getAnnonce(id:any){
            return this.http.get<any>(URL+"/"+ id)
            }
            getIdRh(idAnnonce){
              return this.http.get<any>(URL2+"/"+ idAnnonce);
            }
            updateAnnonce(annonce:any,id:any){
              return this.http.put<any>(URL+"/"+ id, annonce);
            }
            getCandidat(id:any){
              return this.http.get<any>(URL+"/candidats/"+ id);
            }
            supprimerAnnonce(id:any){
              return this.http.delete<any>(URL+"/"+ id);
            }
}
