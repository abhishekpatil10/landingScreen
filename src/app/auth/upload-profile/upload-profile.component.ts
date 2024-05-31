import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-profile',
  templateUrl: './upload-profile.component.html',
  styleUrls: ['./upload-profile.component.css']
})
export class UploadProfileComponent {

  constructor(
    private router : Router
  ){

  }
  uploadPhoto(){
    this.router.navigate(['/college-details']);
  }

  skip(){
    this.router.navigate(['/college-details']);
  }

  openFilePicker(){
    document.getElementById('profilePicker')?.click();
  }

  resetFilePicker(event: any): void {
    const fileInput: HTMLInputElement = event.target;
    fileInput.value = '';
    this.selectedFile = null;
  }

  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = '';
  fileSelected(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    this.selectedFile = inputElement.files![0];
    console.log(this.selectedFile);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }
}
