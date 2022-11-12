import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'

})

export class AppService {

  constructor(private http: HttpClient) { }

  sendLoginInfoAPI(email,password){

    const param = {
      email: email,
      password: password
    }

	  return this.http.post('http://localhost:3000/sendToDB', param)
  }

  isLoggedIn() {
    const token = localStorage.getItem('token'); // get token from local storage
    const payload = atob(token.split('.')[1]); // decode payload of token
    const parsedPayload = JSON.parse(payload); // convert payload into an Object

    return parsedPayload.exp > Date.now() / 1000; // check if token is expired
  }
  
  rootURL = '/api';

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  addUser(user: any){
    return this.http.post(this.rootURL + '/user', {user});
  }

}