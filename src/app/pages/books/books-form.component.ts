// books-form.component.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent {
  // Form fields
  title = '';
  author = '';
  publishedDate = '';
  pages = 1;
  genre: 'Classic' | 'Fairy Tale' | 'Fantasy' | '' = '';
  description = '';
  imageUrl = '';
  imageFileDataUrl = '';

  constructor(private router: Router) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageFileDataUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  get isImageProvided(): boolean {
    return !!this.imageUrl || !!this.imageFileDataUrl;
  }

  onSubmit(): void {
    if (!this.genre || !this.isImageProvided) {
      alert('Please select a genre and provide an image.');
      return;
    }

    const newBook: Book = {
      id: Date.now(),
      title: this.title,
      author: this.author,
      publishedDate: this.publishedDate,
      pages: this.pages,
      genre: this.genre,
      description: this.description,
      imageUrl: this.imageFileDataUrl || this.imageUrl
    };

    const existing = localStorage.getItem('userBooks');
    const userBooks = existing ? JSON.parse(existing) as Book[] : [];
    userBooks.push(newBook);
    localStorage.setItem('userBooks', JSON.stringify(userBooks));

    this.router.navigate(['/books']);
  }
}
