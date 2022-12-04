import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  registerUser(data){
    return this.http.post(environment.apiUrl+'/api/register/', data);
  }

  login(data){
    return this.http.post(environment.apiUrl+'/api/login/', data);
  }

  insertData(data){
    return this.http.post(environment.apiUrl+'/api/addCondidat/', data);
  }

  getData(){
    return this.http.get(environment.apiUrl+'/api/ListCondidat/');
  }

  deleteData(id){
    return this.http.delete(environment.apiUrl+'/api/deleteCondidat/'+id);
  }
}
