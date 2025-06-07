//src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { BooksFormComponent } from './pages/books/books-form.component';
import { QuotesComponent } from './pages/quotes/quotes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'add-book', component: BooksFormComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'books/edit/:id', component: BooksFormComponent }, 
  {
    path: 'books/edit/:id',
    loadComponent: () =>
      import('./pages/books/books-form.component').then(m => m.BooksFormComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  
];
