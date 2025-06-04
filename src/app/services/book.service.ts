import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book.model';
import { MOCK_BOOKS } from '../data/mock-books';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(): Observable<Book[]> {
    return of(MOCK_BOOKS); 
  }
}
