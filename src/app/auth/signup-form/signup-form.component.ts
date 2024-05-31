import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  loginForm!: FormGroup;
  hide = true; // Toggle for password visibility

  constructor(
    private fb: FormBuilder,
    private common : CommonService,
    private router : Router
  ) { }


  ngOnInit(): void {
    // this.loginForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(8)]],
    //   repeatPassword: ['', [Validators.required]]
    // });
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  get repeatPassword() { return this.loginForm.get('repeatPassword'); }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')!.value;
    const repeatPassword = formGroup.get('repeatPassword')!.value;
    if (password !== repeatPassword) {
      formGroup.get('repeatPassword')!.setErrors({ mismatch: true });
    } else {
      formGroup.get('repeatPassword')!.setErrors(null);
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted!');
      console.log(this.loginForm.value);
      this.common.setLocalStorage('loginForm', this.loginForm.value);
      this.router.navigate(['/profile-form']);
    }
  }

  togglePassword() {
    this.hide = !this.hide;
  }
}
