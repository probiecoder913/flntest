import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser} from "@abacritt/angularx-social-login";
import { AppService } from '../app.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private authService: SocialAuthService,
    private AppService: AppService
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

  trySignIn(loginFormData){
    // console.log("Email ",loginFormData.value['login-email']," Password ",loginFormData.value['password']);
    
    this.AppService.sendLoginInfoAPI(loginFormData.value['login-email'],loginFormData.value['password']).subscribe((response)=>{
        // console.log('response is ', response)
      },(error) => {
          console.log('error is ', error)
    })
  }

  signIn(email){
    console.log(email);
  }

  title = 'FLN-Test';

}