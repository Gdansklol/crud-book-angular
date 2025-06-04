import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { RouterModule } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-books',
  standalone: true,
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  imports: [CommonModule, FontAwesomeModule, RouterModule] // ✅ RouterModule 추가
})
export class BooksComponent {
  books: Book[] = [];
  selectedBook?: Book;

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
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
