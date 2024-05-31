import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent {
  constructor(
    private router : Router
  ){

  }
  checkEmailVerificationStatus(){
    sessionStorage.setItem('vf-token','token');

    this.router.navigate(['/dashboard']);
  }
}
