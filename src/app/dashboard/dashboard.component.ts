import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private AppService:AppService, private router:Router) { }

  ngOnInit(): void {

  }

  logout(){
	this.AppService.loggedIn = false;
	this.router.navigate(['/']);
  }

  userData = this.AppService.userData;
  firstname : string = this.userData.firstname;
  lastname : string = this.userData.lastname;
  fathername : string = this.userData.fathername;
  dob : string = this.userData.dob;
  rollnumber : string = this.userData.rollnumber;
  school : string = this.userData.school;
  standard : string = this.userData.standard;
  email : string = this.userData.email;
  result : any = this.userData.result;


	type="PieChart"
	literacyPieChartData = [
		['Correct', this.result.correct],
		['Wrong', this.result.incorrect],
	];
	ColumnNames = ['Key', 'Value'];
	options = {
		colors: ['#495C83', '#7A86B6', '#A8A4CE', '#C8B6E2'], is3D: true
	};


	attemptedPieChartData = [
		['Literacy', this.result.attempted],
		['Numeracy', 9],
	];
	
	numeracyPieChartData = [
		['Correct', 26.8],
		['Wrong', 12.8],
	];

}
