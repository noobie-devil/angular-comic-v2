import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingHeaderComponent } from './reading-header.component';

describe('ReadingHeaderComponent', () => {
  let component: ReadingHeaderComponent;
  let fixture: ComponentFixture<ReadingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
