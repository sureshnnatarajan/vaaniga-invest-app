import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email = '';
  errorMessage = '';
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  sendForgotPassword() {
    this.formReset();
  }

  formReset() {
    this.submitted = true;
    this.errorMessage = '';
  }

  onForgotPasswordSubmit() {
    this.sendForgotPassword();
  }
}
