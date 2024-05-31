import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-social-details',
  templateUrl: './social-details.component.html',
  styleUrls: ['./social-details.component.css']
})
export class SocialDetailsComponent {

  otpForm: FormGroup;
  otpData : string= '';
  constructor(private fb: FormBuilder, private router : Router) {
    this.otpForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
  }
  ngOnInit(): void {

  }

  onSubmit() {

  }
  otpSent : boolean = false;
  sendOtp() {

    this.otpSent = true;
    if (this.otpForm.valid) {
      // logic to send OTP
    }
  }

  goBack() {
    // logic to go back
  }

  onOtpChange( e : any){
    if(e.length == 6){
      console.log(e);
      this.otpData = e;
    }
  }


  verifyMobile(){
    console.log(this.otpForm.value);
    console.log(this.otpData);
    this.router.navigate(['/verify-your-email']);
  }

}

