import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const  URL="http://localhost:3000/sendmailaccepter";
const  URL2="http://localhost:3000/sendmailrefuser";
@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  constructor(private http: HttpClient) { }
  sendEmailaccepter(data:any) {
    return this.http.post(URL, data);
  }
  sendEmailrefuserer(data:any) {
    return this.http.post(URL2, data);
  }
}
