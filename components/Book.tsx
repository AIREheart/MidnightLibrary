import React from 'react';
// FIX: Alias imported 'Book' type to 'BookType' to avoid name collision with the component.
import type { Book as BookType } from '../types';

interface BookProps {
  book: BookType;
  onClick: (book: BookType) => void;
}

export const Book: React.FC<BookProps> = ({ book, onClick }) => {
  return (
    <div 
      className="group aspect-[2/3] cursor-pointer"
      onClick={() => onClick(book)}
      title={`${book.title} by ${book.author}`}
    >
      <img
        src={book.coverUrl}
        alt={`Cover of ${book.title}`}
        className="w-full h-full object-cover rounded-md shadow-lg shadow-black/30 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-cyan-500/20"
      />
    </div>
  );
};