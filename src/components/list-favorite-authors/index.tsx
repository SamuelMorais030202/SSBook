import React from 'react';
import { useFavoriteAuthors } from '../../hooks/useFavoriteAuthors';
import Author from '../author';
import Loading from '../loading';
import styles from './listFavoriteAuthors.module.css';

function ListFavoriteAuthors() {
  const { data, isLoading } = useFavoriteAuthors();

  return (
    <section className={ styles.listFavoriteAuthorsContainer }>
      <header className={ styles.listFavoriteAuthorsHeader }>
        <h1>Autores favoritos</h1>
        <span>ver todos</span>
      </header>
      <section className={ styles.listFavoriteAuthors }>
        {
          isLoading
            ? <Loading />
            : (
              data?.map((author) => (
                <Author key={ author.id } { ...author } />
              ))
            )
        }
      </section>
    </section>
  );
}

export default React.memo(ListFavoriteAuthors);
