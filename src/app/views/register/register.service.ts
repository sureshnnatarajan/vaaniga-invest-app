import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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
    let url = this.signupEndPoint + "social/" + appName;
    /*return this.http.get<String>(url, {
      headers: new HttpHeaders({'Content-Type': 'application/json',  accept: 'text/plain'}),
      responseType: 'text'
    });*/

    return this.http.get<String>(url);
  }
}
