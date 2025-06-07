import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { BooksFormComponent } from './pages/books/books-form.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { AuthGuard } from './auth/auth-guard'; 

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'books',
    component: BooksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-book',
    component: BooksFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'books/edit/:id',
    component: BooksFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'quotes',
    component: QuotesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent)
  }
];
