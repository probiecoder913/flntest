import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.css']
})
export class LeftNavbarComponent implements OnInit {

  constructor(private AppService: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.AppService.loggedIn = false;
    this.router.navigate(['/']);
  }

}
