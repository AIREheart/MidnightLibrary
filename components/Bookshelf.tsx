import React from 'react';
import { Book as BookComponent } from './Book';
import type { Shelf, Book } from '../types';
import { PlusIcon } from './icons/PlusIcon';

interface BookshelfProps {
  shelf: Shelf;
  onBookClick: (book: Book) => void;
}

const woodTextureStyle = {
    backgroundImage: `linear-gradient(90deg, #38221c, #4a2e25 15%, #38221c 30%, #4a2e25 45%, #38221c 60%, #4a2e25 75%, #38221c 90%)`,
    boxShadow: '0 4px 8px rgba(0,0,0,0.5), inset 0 2px 3px rgba(255,255,255,0.1)',
};

export const Bookshelf: React.FC<BookshelfProps> = ({ shelf, onBookClick }) => {

  const handleAddBook = () => {
    alert("This would open a form to add a new book to this shelf. To persist the changes, you would update the app's state and save the new book list to the browser's localStorage.");
  };

  return (
    <section>
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-2xl font-semibold text-slate-100">
          {shelf.title}
        </h2>
        <button 
          onClick={handleAddBook} 
          className="p-1 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
          aria-label={`Add book to ${shelf.title} shelf`}
        >
          <PlusIcon />
        </button>
      </div>
      
      <div className="relative pt-4 pb-8">
        {/* Books container */}
        <div className="flex items-end gap-6 md:gap-8 px-8 min-h-[280px] overflow-x-auto pb-6">
          {shelf.books.map(book => (
            <div key={book.id} className="flex-shrink-0 w-36 md:w-40">
                <BookComponent book={book} onClick={onBookClick} />
            </div>
          ))}
        </div>

        {/* Shelf plank */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-4 rounded-md border-b-2 border-black/50"
          style={woodTextureStyle}
        ></div>
        <div 
          className="absolute -bottom-1 left-2 right-2 h-1 bg-black/30 rounded-b-md blur-sm"
          aria-hidden="true"
        ></div>
      </div>
    </section>
  );
};