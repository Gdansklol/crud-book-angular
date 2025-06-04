// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },                
  { path: 'books', component: BooksComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: '**', redirectTo: '' }                         
];
