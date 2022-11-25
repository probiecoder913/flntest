import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'

})

export class AppService {

  constructor(private http: HttpClient) { }

	user:{
		firstname: string,
		lastname: string,
		email: string,
		password: string,
		userid: string
	};

	loggedIn = false;

  myurl = 'http://localhost:3000';

  sendLoginInfoAPI(data){
	const param = {
	  email: data['login-email'],
	  password: data['password']
	}
	return this.http.post( this.myurl +'/login', param)
  }

  sendSignUpInfoAPI(data){
	const param = {
		firstname: data['signup-firstname'],
		lastname: data['signup-lastname'],
		email: data['signup-email'],
		password: data['signup-password'],
	}
	return this.http.post(this.myurl + '/signup',param)
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