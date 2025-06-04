import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent {
  title = '';
  author = '';
  publishedDate = '';
  pages = 1;
  genre = '';
  description = '';

  // For image inputs
  imageUrl = ''; // user can enter an image URL
  imageFileDataUrl = ''; // this holds base64 string of uploaded file

  constructor(private router: Router) {}

  // When a user selects an image file, read it and store the base64 string
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageFileDataUrl = reader.result as string; // base64 image preview
      };
      reader.readAsDataURL(file);
    }
  }

  // Check if either image URL or file was provided
  get isImageProvided(): boolean {
    return !!this.imageUrl || !!this.imageFileDataUrl;
  }

  // Submit form
  onSubmit(): void {
    if (!this.isImageProvided) {
      alert('Please provide an image URL or upload a file.');
      return;
    }

    const selectedImage = this.imageFileDataUrl || this.imageUrl;

    // Log the new book data (simulate saving)
    console.log('New Book Submitted:', {
      title: this.title,
      author: this.author,
      publishedDate: this.publishedDate,
      pages: this.pages,
      genre: this.genre,
      description: this.description,
      image: selectedImage
    });

    // Redirect to books list after all req saving
    this.router.navigate(['/books']);
  }
}
