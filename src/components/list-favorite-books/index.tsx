import React from 'react';
import { useFavoriteBooks } from '../../hooks/useFavoriteBooks';
import BookCard from '../book';
import styles from './listFavoriteBooks.module.css';

function ListFavoriteBooks() {
  const { data } = useFavoriteBooks();

  return (
    <section className={ styles.listFavoritsBooksContainer }>
      <div className={ styles.favoritesBooksContainer }>
        <header className={ styles.favoritesBooksHeader }>
          <h2>Livros favoritos</h2>
          <span>ver todos</span>
        </header>
      </div>
      <section className={ styles.listBooks }>
        {
          data?.map((book) => (
            <BookCard key={ book.id } { ...book } />
          ))
        }
      </section>
    </section>
  );
}

export default React.memo(ListFavoriteBooks);
