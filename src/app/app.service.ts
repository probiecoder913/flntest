import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'

})

export class AppService {

  constructor(private http: HttpClient) { }

	userData:{
		firstname: string,
		lastname: string,
		fathername: string,
		dob: string,
		rollnumber: string,
		school: string,
		standard: string,
		email: string,
		password: string,
		userid: string,
		userResult:{
			attempted: number,
			correct: number,
			incorrect: number
		},
		admin: boolean
	};	
	

	loggedIn = false;
	routedTo = '/';

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
		fathername: data['signup-fathername'],
		dob: data['signup-DOB'],
		rollnumber: data['signup-rollNumber'],
		school: data['signup-school'],
		standard: data['signup-class'],
		email: data['signup-email'],
		password: data['signup-password'],
	}
	// Name, Father's Name, Date Of Birth, Roll Number, School, Class, Email
	return this.http.post(this.myurl + '/signup',param)
  }

  getUserResult(){
	const param = {
		userEmail : this.userData.email
	};
	return this.http.post(this.myurl + '/getUserResult', param) 
  }

  submitQuizResponse(data){
	// console.log(data);
	const param = data;
	return this.http.post(this.myurl + '/submitQuizResponse',param)
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