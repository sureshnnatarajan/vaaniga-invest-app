import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  
  email = '';
  password = '';
  repeatPassword = '';
  errorMessage = '';
  submitted = false;

  constructor(private router: Router, private loginService: LoginService) {}

  moveToRegister() {
    console.log("Register clicked...");
    this.router.navigate(['register']);
  }

  validateLogin() {
    this.formReset();
  }

  moveToForgotPassword() {
    this.router.navigate(['forgot']);
  }

  createAccount() {
    //Added this after form validation
    this.formReset();
  }

  onLoginSubmit() {
    this.formReset();
  }

  formReset() {
    this.submitted = true;
    this.errorMessage = '';
  }
}
