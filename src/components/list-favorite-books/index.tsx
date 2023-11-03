import React from 'react';
import { useFavoriteBooks } from '../../hooks/useFavoriteBooks';
import BookCard from '../book';
import styles from './listFavoriteBooks.module.css';

function ListFavoriteBooks() {
  const { data } = useFavoriteBooks();

  return (
    <div className={ styles.listFavoritsBooksContainer }>
      <div className={ styles.favoritesBooksContainer }>
        <div className={ styles.favoritesBooksHeader }>
          <h2>Livros favoritos</h2>
          <span>ver todos</span>
        </div>
      </div>
      <div className={ styles.listBooks }>
        {
          data?.map((book) => (
            <BookCard key={ book.id } { ...book } />
          ))
        }
      </div>
    </div>
  );
}

export default React.memo(ListFavoriteBooks);
