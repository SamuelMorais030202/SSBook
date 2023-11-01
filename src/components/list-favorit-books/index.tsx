import React from 'react';
import { useFavoriteBooks } from '../../hooks/useFavoriteBooks';
import BookCard from '../book';
import styles from './listFavoritsBooks.module.css';

function ListFavoritBooks() {
  const { data } = useFavoriteBooks();

  return (
    <div className={ styles.listFavoritsBooksContainer }>
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

export default React.memo(ListFavoritBooks);
