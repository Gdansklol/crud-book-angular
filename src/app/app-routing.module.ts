// src/app/app-routing.module.ts
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { BooksFormComponent } from './pages/books/books-form.component';
import { QuotesComponent } from './pages/quotes/quotes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'add-book', component: BooksFormComponent },
  { path: 'quotes', component: QuotesComponent }
];

export const appRouting = provideRouter(routes);
