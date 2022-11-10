import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  sendLoginInfoAPI(){

    const param = {
      email: "testing param",
      password:"12345678"
    }
	  return this.http.post('http://localhost:3000/sendToDB',__param);
  }
}
