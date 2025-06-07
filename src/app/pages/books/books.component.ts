import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faEdit, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { RouterModule, Router } from '@angular/router';
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
  faUser = faUser;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const localBooks = JSON.parse(localStorage.getItem('userBooks') || '[]') as Book[];
    this.books = [...MOCK_BOOKS, ...localBooks];

    const currentUser = sessionStorage.getItem('currentUser');
    if (!currentUser) {
      this.router.navigate(['/login']);
    }
  }

  openModal(book: Book): void {
    this.selectedBook = book;
    const modalElement = document.getElementById('bookModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  editBook(id: number): void {
    this.router.navigate(['/books/edit', id]);
  }

  deleteBook(id: number): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.books = this.books.filter(book => book.id !== id);
      const updatedUserBooks = this.books.filter(book => book.id > MOCK_BOOKS.length);
      localStorage.setItem('userBooks', JSON.stringify(updatedUserBooks));
    }
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
