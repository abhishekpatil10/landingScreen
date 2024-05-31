import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-college-details',
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.css']
})
export class CollegeDetailsComponent {
  collegeForm!: FormGroup;
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  filteredOptions: Observable<string[]>;
  collegeLatitude: any;
  collegeLongitude: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.collegeForm = this.fb.group({
      collegeName: ['', Validators.required],
      collegeCity: ['', Validators.required],
      collegeState: ['', Validators.required],
      discipline: ['', Validators.required],
      course: ['', Validators.required]
    });

    this.filteredOptions = this.collegeForm.get('collegeName')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  ngOnInit(): void {

  }

  onSubmit() {

  }


  validateCollegeDetails(){
      if (this.collegeForm.valid) {
        console.log('Form submitted!');
        console.log(this.collegeForm.value);
        this.router.navigate(['/social-details']);
      }
  }

}

