import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	constructor( private AppService:AppService, private router: Router) { }

	ngOnInit(): void {
		this.slideActive();
	}

	slideNumber = 0;
	slideActive(){
		// console.log(this.slideNumber);
		setTimeout(()=>{
			if(this.slideNumber>2){
				this.slideNumber=0;
			}else{
				this.slideNumber++;}
			this.slideActive();
		}, 7000);
	}

	auth(value){
		// console.log(value);
		if(value=='admin'){
			this.AppService.routedTo = '/adminDashboard';
			this.router.navigate(['/adminDashboard']);
		}
		if(value=='student'){
			this.AppService.routedTo = '/stuDashboard';
			this.router.navigate(['/stuDashboard']);
		}
		// this.router.navigate(['/auth']);
	}

}

