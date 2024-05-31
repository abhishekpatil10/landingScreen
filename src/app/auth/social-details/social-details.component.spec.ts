import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialDetailsComponent } from './social-details.component';

describe('SocialDetailsComponent', () => {
  let component: SocialDetailsComponent;
  let fixture: ComponentFixture<SocialDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialDetailsComponent]
    });
    fixture = TestBed.createComponent(SocialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
