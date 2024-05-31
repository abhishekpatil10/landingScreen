import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';
import {MatIconModule} from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollegeDetailsComponent } from './college-details/college-details.component';
import { SocialDetailsComponent } from './social-details/social-details.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    SignupFormComponent,
    EmailVerificationComponent,
    ProfileFormComponent,
    UploadProfileComponent,
    CollegeDetailsComponent,
    SocialDetailsComponent
  ],
  imports: [
    CommonModule,
    NgOtpInputModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatOptionModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    MatNativeDateModule,
  ]
})
export class AuthModule { }
