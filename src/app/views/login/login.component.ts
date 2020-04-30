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

  onLoginSubmit() {
    this.formReset();
  }

  formReset() {
    this.submitted = true;
    this.errorMessage = '';
  }
}
