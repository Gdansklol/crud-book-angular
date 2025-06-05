import { Book } from '../models/book.model';

export const MOCK_BOOKS: Book[] = [
  {
    id: 1,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publishedDate: '1813-01-28',
    pages: 432,
    description: 'A classic novel of manners and love in 19th-century England.',
    genre: 'Classic',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794'
  },
  {
    id: 2,
    title: 'Forest Adventure',
    author: 'Nature Lover',
    publishedDate: '2021-06-15',
    pages: 240,
    description: 'Explore the mystery of ancient forests and wild animals.',
    genre: 'Fantasy',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 3,
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    publishedDate: "1952-09-01",
    pages: 127,
    description: "An aging fisherman struggles with a giant marlin in the Gulf Stream.",
    genre: "Classic",
    imageUrl: "https://mblogthumb-phinf.pstatic.net/MjAyNDAyMDRfMjIx/MDAxNzA3MDQ2NzgzMjk1.4uWHJ40TFs6ekkffYyDCvsDivaTEp4ZsAUa3699kmo4g.wSxpx6-XCdvYkOsStg2r7LY0LQCAeWw-eTvQ7eCDl0Mg.JPEG.ksnv69552/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C37.JPG?type=w800"
  },
  {
    id: 4,
    title: 'Cartoon World',
    author: 'Animator',
    publishedDate: '2018-09-09',
    pages: 120,
    description: 'Fun adventures in a colorful cartoon world.',
    genre: 'Fairy Tale',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
  },
  {
    id: 5,
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    publishedDate: '1950-10-16',
    pages: 568,
    description: 'An epic fantasy adventure in a mythical land ruled by magic and courage.',
    genre: 'Fantasy',
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=60'
  }
];
