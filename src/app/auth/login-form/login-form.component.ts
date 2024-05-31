import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm!: FormGroup;
  hide = true; // Toggle for password visibility
  LoginBtnText : string = 'Login';

  constructor(private fb: FormBuilder, private router : Router) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted!');
      console.log(this.loginForm.value);
      this.LoginBtnText = 'verifying...';
      sessionStorage.setItem('vf-token','token');
      sessionStorage.setItem('college','false');
      this.router.navigate(['/dashboard']);
    }
  }

  togglePassword() {
    this.hide = !this.hide;
  }
}
