export interface Book {
    id: number;
    title: string;
    author: string;
    publishedDate: string;
    pages: number;
    description: string;
    genre: 'Classic' | 'Fairy Tale' | 'Fantasy'; 
    imageUrl: string;
  }
  
  