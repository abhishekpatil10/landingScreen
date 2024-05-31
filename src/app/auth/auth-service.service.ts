import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  isLoggedIn() {
    if (sessionStorage.getItem('vf-token')) {
      return true;
    }
    return false;
  }

  getProfileCompletionStatus(): string {
    // Implement your logic to check profile completion
    // Return a string that represents the next step or "complete" if the profile is done
    const status = sessionStorage.getItem('college'); // Example status: 'profile', 'upload', 'college', 'social', 'complete'
    return status || 'profile';
  }

}
