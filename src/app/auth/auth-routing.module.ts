import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';
import { SocialDetailsComponent } from './social-details/social-details.component';
import { CollegeDetailsComponent } from './college-details/college-details.component';
import { IsLoggedInGuard } from '../is-logged-in.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login-user',
    component: LoginFormComponent,
  },
  {
    path: 'signup-user',
    component: SignupFormComponent,
  },
  {
    path: 'verify-your-email',
    component: EmailVerificationComponent,
  },
  {
    path: 'profile-form',
    component: ProfileFormComponent,
  },
  {
    path: 'upload-profile',
    component: UploadProfileComponent,
  },
  {
    path: 'college-details',
    component: CollegeDetailsComponent,
  },
  {
    path: 'social-details',
    component: SocialDetailsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
