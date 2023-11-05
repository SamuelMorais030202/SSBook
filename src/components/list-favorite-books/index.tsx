import React from 'react';
import { useFavoriteBooks } from '../../hooks/useFavoriteBooks';
import BookCard from '../book';
import Loading from '../loading';
import styles from './listFavoriteBooks.module.css';

function ListFavoriteBooks() {
  const { data, isLoading } = useFavoriteBooks();

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
          isLoading
            ? <Loading />
            : (
              data?.map((book) => (
                <BookCard key={ book.id } { ...book } />
              ))
            )
        }
        {/* {
          data?.map((book) => (
            <BookCard key={ book.id } { ...book } />
          ))
        } */}
      </section>
    </section>
  );
}

export default React.memo(ListFavoriteBooks);
