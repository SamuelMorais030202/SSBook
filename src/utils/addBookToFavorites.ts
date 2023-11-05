import { IBook } from '../types/booksFetchResponse';

export function addBookToFavorites(book : IBook) {
  const listFavorite = localStorage.getItem('favoriteBooks');
  const favorites = listFavorite ? JSON.parse(listFavorite) as IBook[] : [];

  const validateBook = favorites.find((bookFavorite) => bookFavorite.id === book.id);

  if (!validateBook) {
    const updateFavorites = [...favorites, book];
    localStorage.setItem('favoriteBooks', JSON.stringify(updateFavorites));
  }
}
