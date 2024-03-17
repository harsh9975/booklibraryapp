// BookContext.tsx
import React, {createContext, useContext, useState} from 'react';

interface Book {
  key: string;
  title: string;
  author: string;
  liked: boolean;
  bookmarked: boolean;
  comments: string[];
}

interface BookContextType {
  likedBooks: Book[];
  bookmarkedBooks: Book[];
  comments: Record<string, string[]>;
  likeBook: (bookId: string) => void;
  bookmarkBook: (bookId: string) => void;
  addComment: (bookId: string, comment: string) => void;
}

const BookContext = createContext<BookContextType>({
  likedBooks: [],
  bookmarkedBooks: [],
  comments: {},
  likeBook: () => {},
  bookmarkBook: () => {},
  addComment: () => {},
  isBookmarked: () => false,
});

export const useBookContext = () => useContext(BookContext);

export const BookProvider: React.FC = ({children}) => {
  const [likedBooks, setLikedBooks] = useState<Book[]>([]);
  const [bookmarkedBooks, setBookmarkedBooks] = useState<Book[]>([]);
  const [comments, setComments] = useState<Record<string, string[]>>({});

  const likeBook = (bookData: Book) => {
    const isLiked = likedBooks.some(book => book.key === bookData.key);

    if (isLiked) {
      const updatedLikedBooks = likedBooks.filter(
        book => book.key !== bookData.key,
      );
      setLikedBooks(updatedLikedBooks);
    } else {
      setLikedBooks(prevLikedBooks => [...prevLikedBooks, bookData]);
    }
  };

  const bookmarkBook = (book: Book) => {
    setBookmarkedBooks(prevBookmarkedBooks => {
      const existingIndex = prevBookmarkedBooks.findIndex(
        b => b.key === book.key,
      );
      if (existingIndex !== -1) {
        const updatedBookmarkedBooks = [...prevBookmarkedBooks];
        updatedBookmarkedBooks.splice(existingIndex, 1);
        return updatedBookmarkedBooks;
      } else {
        return [...prevBookmarkedBooks, book];
      }
    });
  };

  const isBookmarked = (bookKey: string) => {
    return bookmarkedBooks.some(book => book.key === bookKey);
  };

  const addComment = (bookId: string, comment: string) => {
    setComments(prevComments => ({
      ...prevComments,
      [bookId]: [...(prevComments[bookId] || []), comment], // Add new comment to existing comments for the book
    }));
  };

  return (
    <BookContext.Provider
      value={{
        likedBooks,
        bookmarkedBooks,
        comments,
        likeBook,
        bookmarkBook,
        isBookmarked,
        addComment,
      }}>
      {children}
    </BookContext.Provider>
  );
};
