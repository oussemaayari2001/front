import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/rh/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private http:HttpClient) { }
  login(credentials:any): Observable<any> {
    return this.http.post(AUTH_API + 'signin', credentials, httpOptions);
  }

  register(user): Observable<any> {
   
    return this.http.post(AUTH_API + 'signup', user, httpOptions);
  }
  registerCompte(user): Observable<any> {
   
    return this.http.post(AUTH_API + 'signup2', user, httpOptions);
  }
  updateClient(id:number,user):Observable<any>{
    return this.http.put(AUTH_API+""+id, user,httpOptions);
    }
    updateCompte(id:number,user):Observable<any>{
      return this.http.put(AUTH_API+"update/"+id, user,httpOptions);
      }
    deleteClient(id:number){
      return this.http.delete(AUTH_API+""+ id,httpOptions);
      }
      deleteTclient(id:number){
        return this.http.delete(AUTH_API+"delete/"+ id,httpOptions);
        }
        logout(){
          window.sessionStorage.clear();
          return this.http.delete(AUTH_API+"logout");
        }
      

}
