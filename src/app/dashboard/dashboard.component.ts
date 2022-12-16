import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( 
	private AppService:AppService, 
	private router:Router) { }

  ngOnInit(): void {
	this.getUserResult();
  }

  isLoading:boolean;
  candidateStatus:any = 'status';

  userData = this.AppService.userData;
  firstname : string = this.userData.firstname;
  lastname : string = this.userData.lastname;
  fathername : string = this.userData.fathername;
  dob : string = this.userData.dob;
  rollnumber : string = this.userData.rollnumber;
  school : string = this.userData.school;
  standard : string = this.userData.standard;
  email : string = this.userData.email;
  result : any;//this.AppService.userResult

  getUserResult(){
	this.isLoading = true;
	this.AppService.getUserResult().subscribe((response)=>{
		this.result = response['data'][0].result;
		// console.log(this.result);
		// console.log(this.result.correct);
	});
	
	setTimeout(()=>{
		if(this.result.correct<5){
			this.candidateStatus = 'Failed';
		}else{
			this.candidateStatus = 'Passed';
		};
		this.isLoading = false;
	},2000);
  }

  logout(){
	this.AppService.loggedIn = false;
	this.router.navigate(['/']);
  }

    attemptedOptions = {
		colors: ['#495C83', '#dc3912'], is3D: true
	};
	attemptedPieChartData = [
		['Literacy', 8],
		// ['Literacy', this.result.attempted],
		['Numeracy', 9],
	];

	literacyPieChartData = [
		['Correct', 6],
		['Wrong', 4],
		// ['Correct', this.result.correct],
		// ['Wrong', this.result.incorrect],
	];
	literacyOptions = {
		colors: ['#495C83', '#a9b0cd'], is3D: true
	};

	
	numeracyPieChartData = [
		['Correct', 26.8],
		['Wrong', 12.8],
	];
	numeracyOptions = {
		colors: ['#dc3912', '#f6af9e'], is3D: true
	}

	lineChartData = [
		["Jan",  7.0,8.3],
		["Feb",  6.9,4.7],
		["Mar",  9.5,6.8],
		["Apr",  14.5,7.0],
		["May",  18.2, 20.4],
		["Jun",  21.5,16.8],
		["Jul",  25.2,18],
		["Aug",  26.5,22],
		["Sep",  23.3,8],
		["Oct",  18.3,27],
		["Nov",  13.9,23],
		["Dec",  9.6,18.4]
	 ];
	lineChartColumnNames = ["Month", "Literacy","Numeracy"];
	lineChartOptions = {   
		legend: { position: 'right', },
	 };
}
