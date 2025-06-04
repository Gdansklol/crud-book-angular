import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { MOCK_BOOKS } from '../../data/mock-books';
import { Book } from '../../models/book.model';

declare var bootstrap: any;

@Component({
  selector: 'app-books',
  standalone: true,
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
})
export class BooksComponent {
  books: Book[] = [];
  selectedBook?: Book;

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  ngOnInit(): void {
    const localBooks = JSON.parse(localStorage.getItem('userBooks') || '[]') as Book[];
    this.books = [...MOCK_BOOKS, ...localBooks];
  }

  openModal(book: Book): void {
    this.selectedBook = book;
    const modalElement = document.getElementById('bookModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
