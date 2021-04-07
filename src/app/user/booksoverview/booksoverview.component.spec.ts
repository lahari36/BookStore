import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksoverviewComponent } from './booksoverview.component';

describe('BooksoverviewComponent', () => {
  let component: BooksoverviewComponent;
  let fixture: ComponentFixture<BooksoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
