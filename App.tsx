import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Bookshelf } from './components/Bookshelf';
import { BookModal } from './components/BookModal';
import { StarryBackground } from './components/StarryBackground';
import { MagicalEffects } from './components/MagicalEffects';
import { generateBookSummary } from './services/geminiService';
import { SHELVES_DATA } from './data/books';
import type { Book, Shelf } from './types';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-white">Something went wrong. Please refresh the page.</div>;
    }
    return this.props.children;
  }
}

export default function App() {
  const [shelves, setShelves] = useState<Shelf[]>(SHELVES_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const handleGenerateSummary = async (bookToUpdate: Book) => {
    setIsGenerating(true);
    setError(null);
    try {
      const summary = await generateBookSummary(bookToUpdate.title, bookToUpdate.author);
      const newShelves = shelves.map(shelf => ({
        ...shelf,
        books: shelf.books.map(book => 
          book.id === bookToUpdate.id ? { ...book, summary } : book
        )
      }));
      setShelves(newShelves);
      setSelectedBook(prevBook => prevBook ? { ...prevBook, summary } : null);
    } catch (err) {
      // FIX: Updated error message to not mention API key, per coding guidelines.
      setError('Failed to generate summary. Please try again.');
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const filteredShelves = useMemo(() => {
    if (!searchTerm) {
      return shelves;
    }
    return shelves.map(shelf => ({
      ...shelf,
      books: shelf.books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(shelf => shelf.books.length > 0);
  }, [searchTerm, shelves]);

  return (
    <>
      <StarryBackground />
      <MagicalEffects />
      <div className="relative min-h-screen font-sans text-slate-200 isolate">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <main className="container mx-auto px-4 py-8">
          {filteredShelves.length > 0 ? (
            <div className="space-y-12">
              {filteredShelves.map(shelf => (
                <Bookshelf key={shelf.title} shelf={shelf} onBookClick={handleBookClick} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-slate-400">No books found for "{searchTerm}"</h2>
              <p className="text-slate-500 mt-2">Try searching for a different title or author.</p>
            </div>
          )}
        </main>
        <BookModal 
          book={selectedBook} 
          onClose={handleCloseModal}
          onGenerateSummary={handleGenerateSummary}
          isGenerating={isGenerating}
          error={error}
        />
      </div>
    </>
  );
}