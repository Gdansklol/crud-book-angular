// src/app/pages/books/books-form.component.ts
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css'],
})
export class BooksFormComponent {
  title = '';
  author = '';
  publishedDate = '';
  pages = 0;
  genre = '';
  description = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    console.log(' New Book Submitted:', {
      title: this.title,
      author: this.author,
      publishedDate: this.publishedDate,
      pages: this.pages,
      genre: this.genre,
      description: this.description,
    });

    // TODO: API-anropslogik som ska läggas till
    this.router.navigate(['/books']); // 
  }
}
