import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileCompletionGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(): boolean {
    const status = this.authService.getProfileCompletionStatus();
    console.log(status);
    if (status !== 'complete') {
      this.router.navigate([`college-details`], { replaceUrl: true });
      return false;
    }
    return true;
  }
}
