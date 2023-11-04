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
          <h1>Livros favoritos</h1>
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
