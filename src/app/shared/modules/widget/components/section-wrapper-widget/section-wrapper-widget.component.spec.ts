import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWrapperWidgetComponent } from './section-wrapper-widget.component';

describe('SectionWrapperWidgetComponent', () => {
  let component: SectionWrapperWidgetComponent;
  let fixture: ComponentFixture<SectionWrapperWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionWrapperWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWrapperWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
