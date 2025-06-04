import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksComponent } from './books.component'; 


import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 👇 BooksComponent와 함께 사용하는 모듈들도 함께 임포트
      imports: [BooksComponent, CommonModule, FontAwesomeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
