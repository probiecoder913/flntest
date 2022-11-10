import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser} from "@abacritt/angularx-social-login";
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authService: SocialAuthService,
    private DashboardService: DashboardService
    ) { }

  ngOnInit(): void {
    //----------*START* API for testing ANGULAR->NODEJS-----//
    this.DashboardService.sendLoginInfoAPI().subscribe((response)=>{
        console.log('response is ', response)
      },(error) => {
          console.log('error is ', error)
    })
    //----------*END* API for testing ANGULAR->NODEJS-----//
    // ------------*START* Google Authentication Part-----------//
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      // console.log(this.user);
      this.signIn(this.user.email);
    });
    // ------------*END* Google Authentication Part-----------//
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
