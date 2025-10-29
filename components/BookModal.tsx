
import React from 'react';
import type { Book } from '../types';
import { CloseIcon } from './icons/CloseIcon';
import { SparklesIcon } from './icons/SparklesIcon';

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
  onGenerateSummary: (book: Book) => Promise<void>;
  isGenerating: boolean;
  error: string | null;
}

export const BookModal: React.FC<BookModalProps> = ({ book, onClose, onGenerateSummary, isGenerating, error }) => {
  if (!book) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-800/90 border border-slate-700 rounded-lg shadow-2xl shadow-black/50 w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row gap-8 p-8 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
          <CloseIcon />
        </button>
        
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img src={book.coverUrl} alt={`Cover of ${book.title}`} className="w-full aspect-[2/3] object-cover rounded-md shadow-lg shadow-black/30"/>
        </div>

        <div className="flex-grow flex flex-col">
          <h2 className="text-3xl font-bold text-white mb-1">{book.title}</h2>
          <p className="text-lg text-slate-400 mb-4">by {book.author}</p>
          <p className="text-sm text-cyan-400 mb-6">Finished: {book.finishedDate}</p>

          <div className="flex-grow space-y-4 overflow-y-auto pr-2">
            <h3 className="text-xl font-semibold text-white">Summary</h3>
            <p className="text-slate-300 leading-relaxed">{book.summary}</p>
          </div>
          
          {error && <div className="mt-4 p-3 bg-red-900/50 border border-red-700 text-red-300 rounded-md">{error}</div>}

          <div className="mt-6 pt-6 border-t border-slate-700 flex flex-col sm:flex-row gap-4 items-center">
             <button
              onClick={() => onGenerateSummary(book)}
              disabled={isGenerating}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <SparklesIcon />
                  Generate AI Summary
                </>
              )}
            </button>
            {book.reviewLink && (
              <a href={book.reviewLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center px-4 py-2 border border-slate-600 text-slate-300 font-semibold rounded-md hover:bg-slate-700 hover:text-white transition-colors">
                Read My Review
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
