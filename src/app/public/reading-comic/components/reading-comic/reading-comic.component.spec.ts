import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingComicComponent } from './reading-comic.component';

describe('ReadingComicComponent', () => {
  let component: ReadingComicComponent;
  let fixture: ComponentFixture<ReadingComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
