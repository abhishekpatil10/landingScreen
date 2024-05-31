import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
[x: string]: any;
  profileForm!: FormGroup;
  hide = true; // Toggle for password visibility
  interests: string[] = ['Sports', 'Finance', 'Pop Culture', 'Fitness', 'Music', 'Bollywood', 'New', 'Tech', 'Dance', 'Podcasts(Video and Audio)', 'Trivia', 'Fashion and Beauty', 'Food', 'Travel', 'Lifestyle', 'History', 'Vlog'];
  selectedInterests: string[] = [];
  minDate: Date;

  constructor(private fb: FormBuilder, private router: Router) {
    const today = new Date();
    this.minDate = new Date(today.getFullYear() - 14, today.getMonth(), today.getDate());
  }


  ngOnInit(): void {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      igHandle: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      interests: [[], Validators.required]
    });
  }

  onSelectionChange(event: any) {
    this.selectedInterests = event.value;
    console.log(this.selectedInterests);
  }

  removeInterest(interest: string): void {
    const index = this.selectedInterests.indexOf(interest);
    if (index >= 0) {
      this.selectedInterests.splice(index, 1);
      this.profileForm.get('interests')?.setValue(this.selectedInterests);
    }
  }

  get email() { return this.profileForm.get('email'); }
  get password() { return this.profileForm.get('password'); }

  onSubmit() {

  }

  togglePassword() {
    this.hide = !this.hide;
  }


  validateProfileDetails(){
      if (this.profileForm.valid) {
        console.log('Form submitted!');
        console.log(this.profileForm.value);
        this.router.navigate(['/upload-profile']);
      }
  }

}
