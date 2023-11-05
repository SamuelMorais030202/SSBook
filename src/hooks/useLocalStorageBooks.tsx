import { useEffect, useState } from 'react';
import { IBook } from '../types/booksFetchResponse';

export function useLocalStorageBooks() {
  const [listBook, setlistBook] = useState([]);

  function loadBooks() {
    const listFavorites = localStorage.getItem('favoriteBooks');
    const parsedBooks = listFavorites ? JSON.parse(listFavorites) : [];

    setlistBook(parsedBooks);
  }

  useEffect(() => {
    loadBooks();
  }, []);

  const removeBookFromLocalStorage = (bookId: string) => {
    const listFavorite = localStorage.getItem('favoriteBooks');
    const favorites = listFavorite ? JSON.parse(listFavorite) as IBook[] : [];
    const updatedBooks = favorites.filter((book) => book.id !== bookId);
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedBooks));
    loadBooks();
  };

  return { listBook, removeBookFromLocalStorage } as {
    listBook: IBook[];
    removeBookFromLocalStorage: (bookId: string) => void;
  };
}
