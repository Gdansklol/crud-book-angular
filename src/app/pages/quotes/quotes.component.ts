import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuoteLeft, faMugSaucer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
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

  randomQuote = {
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

  getRandomQuote(): void {
    const apiUrl = 'https://zenquotes.io/api/quotes';
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;

    fetch(proxyUrl)
      .then(response => response.json())
      .then(data => {
        const parsed = JSON.parse(data.contents);
        const random = parsed[Math.floor(Math.random() * parsed.length)];
        this.randomQuote = {
          text: random.q,
          author: random.a
        };

        const modalElement = document.getElementById('randomQuoteModal');
        if (modalElement) {
          const modal = new (window as any).bootstrap.Modal(modalElement);
          modal.show();
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        this.randomQuote = {
          text: 'Failed to fetch quote.',
          author: 'System'
        };
      });
  }

  addRandomQuote(): void {
    this.quotes.unshift({ ...this.randomQuote });
    localStorage.setItem('userQuotes', JSON.stringify(this.quotes));

    const modalElement = document.getElementById('randomQuoteModal');
    if (modalElement) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    }
  }
}
