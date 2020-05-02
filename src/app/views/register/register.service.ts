import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  signupEndPoint = environment.vaaniga_signup_endpoint;
  dashBoardEndPoint = environment.invest_api_dashboard_endpoint;

  constructor(private http: HttpClient) { }

  signupUser(userObj: any) {
    return this.http.post<any>(this.signupEndPoint, userObj);
  }

  signupSocial(appName: String) {
    return this.http.get(this.signupEndPoint + "social/" + appName);
  }
}
