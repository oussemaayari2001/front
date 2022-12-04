import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const  URL="http://localhost:3000/sendmail";
@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  constructor(private http: HttpClient) { }
  sendEmail(data) {
    return this.http.post(URL, data);
  }
}
