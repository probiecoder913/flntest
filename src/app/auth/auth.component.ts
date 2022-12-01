import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

	constructor(
		private AppService: AppService,
		private router: Router
		) { }

	ngOnInit(): void {
		this.loginSection = true;
	}

	loginSection: boolean;
	
	loginSignupToggle(){
		if(this.loginSection==true){
			return this.loginSection=false;
		}
		else{
			return this.loginSection=true;
		}
	}

	login(loginFormData){
		//console.log("Email ",loginFormData.value['login-email']," Password ",loginFormData.value['password']);
		//console.log(loginFormData);
		this.AppService.sendLoginInfoAPI(loginFormData.value).subscribe((response)=>{
				if(response['success']){
					// user = response['user']
					this.AppService.userData = response['user'];
					this.AppService.loggedIn = true; 
					 this.router.navigate(['/dashboard']);
				}
			},(error) => {
				if(error.status==404){
					//email not found
				}else if(error.status==400){
					//wrong password
				}
			}
		)
	}

	signUp(SignUpFormData){
		console.log(SignUpFormData.value);
		this.AppService.sendSignUpInfoAPI(SignUpFormData.value).subscribe((response)=>{
			if(response['success']){
				this.AppService.userData = response['data'];
				this.AppService.loggedIn = true; 
				this.router.navigate(['/dashboard']);
			}else if(!response['success']){
				// user already exists 
			}
		},(error)=>{
			console.log(error);
		})
	}

	title = 'FLN-Test';

}