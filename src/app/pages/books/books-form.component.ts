import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';
import { MOCK_BOOKS } from '../../data/mock-books';

@Component({
  selector: 'app-books-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css'],
})
export class BooksFormComponent {
  title = '';
  author = '';
  publishedDate = '';
  pages = 1;
  genre: 'Classic' | 'Fairy Tale' | 'Fantasy' = 'Classic';
  description = '';
  imageUrl = '';
  imageFileDataUrl = '';

  editMode = false;
  editId: number | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.editMode = true;
      this.editId = id;

      const userBooks = JSON.parse(localStorage.getItem('userBooks') || '[]') as Book[];
      const allBooks = [...MOCK_BOOKS, ...userBooks];
      const book = allBooks.find(b => b.id === id);

      if (book) {
        this.title = book.title;
        this.author = book.author;
        this.publishedDate = book.publishedDate;
        this.pages = book.pages;
        this.genre = book.genre;
        this.description = book.description;
        this.imageUrl = book.imageUrl || '';
      }
    }
  }

  get isImageProvided(): boolean {
    return !!this.imageUrl || !!this.imageFileDataUrl;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageFileDataUrl = reader.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit(): void {
    const newBook: Book = {
      id: this.editId || Date.now(),
      title: this.title,
      author: this.author,
      publishedDate: this.publishedDate,
      pages: this.pages,
      genre: this.genre,
      description: this.description,
      imageUrl: this.imageFileDataUrl || this.imageUrl,
    };

    const stored = JSON.parse(localStorage.getItem('userBooks') || '[]') as Book[];

    if (this.editMode) {
      const updated = stored.map(b => (b.id === this.editId ? newBook : b));
      localStorage.setItem('userBooks', JSON.stringify(updated));
    } else {
      localStorage.setItem('userBooks', JSON.stringify([...stored, newBook]));
    }

    this.router.navigate(['/books']);
  }
}
