export interface Book {
    id: number;
    title: string;
    author: string;
    publishedDate: string;
    pages: number;
    description: string;
    genre: 'Classic' | 'Fairy Tale' | 'Fantasy';  // 제한된 장르만 허용
    imageUrl: string;
  }
  