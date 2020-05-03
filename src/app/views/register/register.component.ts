import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  
  firstName = '';
  lastName = '';
  mobileNumber = '';
  email = '';
  password = '';
  repeatPassword = '';
  errorMessageDiv = false;
  errorMessage = '';
  submitted = false;

  constructor(private router: Router, private registerService: RegisterService) {}

  createAccount() {
    //console.log(this.firstName, this.lastName, this.mobileNumber, this.email, this.password, this.repeatPassword);
    /*if (this.password !== this.repeatPassword) {
      this.errorMessage = "Passwords do not match!";
      return;
    } */

    let obj : any = 
    {
      "email": "",
      "firstName": "",
      "lastName": "",
      "mobileNumber" : ""
    };

    obj.email = this.email;
    obj.firstName = this.firstName;
    obj.lastName = this.lastName;
    obj.mobileNumber = this.mobileNumber;

    this.registerService.signupUser(obj)
                        .subscribe(
                          res => { 
                            console.log(res.executionTime);
                            this.router.navigate(['dashboard']);
                          }, 
                          err => {},
                          () => {
                            this.formReset();
                          }
                        );
  }

  onSignUpSubmit() {
    this.formReset();
    this.createAccount();
  }

  formReset() {
    this.submitted = true;
    this.errorMessage = '';
  }

  socialSignIn(appName) {
    this.registerService.signupSocial(appName)
                        .subscribe(
                          res => {
                            console.log("1" + res);
                            console.log("2" + res.toString());
                            let reUrl = res.toString().substring((res.toString().indexOf(":"))+1, res.toString().length);
                            console.log("reUrl ==>" + reUrl);
                            window.location.href = reUrl;
                          }
                        );
  }
}
