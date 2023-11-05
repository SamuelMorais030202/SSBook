import { IBook } from '../types/booksFetchResponse';

export function removeBookToFavorites(bookId: string) {
  const listFavorite = localStorage.getItem('favoriteBooks');
  const favorites = listFavorite ? JSON.parse(listFavorite) as IBook[] : [];

  // Filtrar os livros para remover o livro com o ID correspondente
  const updatedBooks = favorites.filter((book) => book.id !== bookId);

  // Salvar a lista atualizada de livros favoritos no LocalStorage
  localStorage.setItem('favoriteBooks', JSON.stringify(updatedBooks));
}
