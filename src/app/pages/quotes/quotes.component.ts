import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuoteLeft, faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule,FormsModule],
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  faQuoteLeft = faQuoteLeft;
  faMugSaucer = faMugSaucer;

  quotes: { text: string; author: string }[] = [];

  newQuote = {
    text: '',
    author: ''
  };

  ngOnInit(): void {
    const storedQuotes = localStorage.getItem('userQuotes');
    if (storedQuotes) {
      this.quotes = JSON.parse(storedQuotes);
    } else {
      this.quotes = [
        { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
        { text: "I think, therefore I am.", author: "René Descartes" },
        { text: "All great changes are preceded by chaos.", author: "Deepak Chopra" },
        { text: "Success is nothing more than a few simple disciplines, practiced every day.", author: "Jim Rohn" },
        { text: "Impossible is a word to be found only in the dictionary of fools.", author: "Napoleon Bonaparte" }
      ];
    }
  }

  openModal(): void {
    const modalElement = document.getElementById('addQuoteModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  addQuote(): void {
    if (this.newQuote.text && this.newQuote.author) {
      this.quotes.unshift({ ...this.newQuote });
      localStorage.setItem('userQuotes', JSON.stringify(this.quotes));
      this.newQuote = { text: '', author: '' };
      const modalElement = document.getElementById('addQuoteModal');
      if (modalElement) {
        const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
        modal.hide();
      }
    }
  }

  deleteQuote(index: number): void {
    this.quotes.splice(index, 1);
    localStorage.setItem('userQuotes', JSON.stringify(this.quotes));
  }
}
