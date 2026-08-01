import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
api_url = "https://astonic-mart-default-rtdb.firebaseio.com/contact.json";

  constructor(private http: HttpClient) {}
  
  sendMessage(data: any){
    return this.http.post(this.api_url, data);
  }

  getMessages(){
    return this.http.get(this.api_url);
  }
}
