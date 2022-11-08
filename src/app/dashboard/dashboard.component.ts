import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser} from "@abacritt/angularx-social-login";
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      // console.log(this.user);
      this.signIn(this.user.email);
    });
  }

  //--------For Google Login--------
  user: SocialUser;
  loggedIn: boolean;
  loginViaGoogle: boolean = false;

  googleLogin(){
    this.loginViaGoogle = true;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  //-------Sign-In function---------

  trySignIn(loginFormData){
    // console.log(loginFormData.value['login-email']+" | "+loginFormData.value['password']);
    
  }

  signIn(email){
    console.log(email);
  }

  title = 'FLN-Test';

}
