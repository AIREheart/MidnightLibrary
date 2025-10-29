
export interface Book {
  id: number;
  title: string;
  author: string;
  coverUrl: string;
  finishedDate: string;
  reviewLink?: string;
  summary: string;
}

export interface Shelf {
  title: string;
  books: Book[];
}
