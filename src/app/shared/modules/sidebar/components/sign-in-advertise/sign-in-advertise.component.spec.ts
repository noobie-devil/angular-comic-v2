import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInAdvertiseComponent } from './sign-in-advertise.component';

describe('SignInAdvertiseComponent', () => {
  let component: SignInAdvertiseComponent;
  let fixture: ComponentFixture<SignInAdvertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInAdvertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInAdvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
