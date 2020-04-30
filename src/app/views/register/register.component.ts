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
    this.formReset();
    console.log(this.firstName, this.lastName, this.mobileNumber, this.email, this.password, this.repeatPassword);
    if (this.password !== this.repeatPassword) {
      this.errorMessage = "Passwords do not match!";
      return;
    }
  }

  onSignUpSubmit() {
    this.formReset();
    this.createAccount();
  }

  formReset() {
    this.submitted = true;
    this.errorMessage = '';
  }
}
