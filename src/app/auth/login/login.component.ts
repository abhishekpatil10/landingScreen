import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router : Router
  ) {
  }
  navigateToLogin(){
    this.router.navigate(['/login-user']);
  }
  navigateToSignUp(){
    this.router.navigate(['/signup-user']);
  }

}
