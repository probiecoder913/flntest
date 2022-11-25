import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	constructor() { }

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

}

