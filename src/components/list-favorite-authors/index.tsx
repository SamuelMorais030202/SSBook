import React from 'react';
import { useFavoriteAuthors } from '../../hooks/useFavoriteAuthors';
import Author from '../author';
import styles from './listFavoriteAuthors.module.css';

function ListFavoriteAuthors() {
  const { data } = useFavoriteAuthors();

  return (
    <section className={ styles.listFavoriteAuthorsContainer }>
      <header className={ styles.listFavoriteAuthorsHeader }>
        <h2>Artistas favoritos</h2>
        <span>ver todos</span>
      </header>
      <section className={ styles.listFavoriteAuthors }>
        {
          data?.map((author) => (
            <Author key={ author.id } { ...author } />
          ))
        }
      </section>
    </section>
  );
}

export default React.memo(ListFavoriteAuthors);
