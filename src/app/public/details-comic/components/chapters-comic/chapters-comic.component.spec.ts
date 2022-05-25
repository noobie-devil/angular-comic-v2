import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersComicComponent } from './chapters-comic.component';

describe('ChaptersComicComponent', () => {
  let component: ChaptersComicComponent;
  let fixture: ComponentFixture<ChaptersComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaptersComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
