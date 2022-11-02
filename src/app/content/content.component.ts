import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
	this.slideActive();
  }

  user: SocialUser;
  loggedIn: boolean;
  loginViaGoogle: boolean = false;

  slideNumber = 0;
  slideActive(){
	console.log(this.slideNumber);
	setTimeout(()=>{
		if(this.slideNumber>2){
			this.slideNumber=0;
		}else{
			this.slideNumber++;}
		this.slideActive();
	}, 7000);
  }

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

  title = 'flntest';


}

