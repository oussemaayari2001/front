import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Condidat } from '../models/condidat.model';
const  URL="http://localhost:3000/candidat";
const  URL2="http://localhost:3000/rh/filtration";
@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http:HttpClient  ) { }

  addCandidat(c:any):Observable<any>{
    return this.http.post<Condidat>(URL,c);
    }
  getCandidats():Observable<Condidat[]>{
    return this.http.get<Condidat[]>(URL);
      }
  deleteCandidat(id:any){
    return this.http.delete(URL+"/"+id);
      }
      filtrerCandidats(v:any){
        return this.http.post<any>(URL2,v);
      }
      getCandidat(id:any){
        return this.http.get(URL+"/"+id);
          }
}
