import React from 'react';
import { useFavoriteAuthors } from '../../hooks/useFavoriteAuthors';
import Author from '../author';
import styles from './listFavoriteAuthors.module.css';

function ListFavoriteAuthors() {
  const { data } = useFavoriteAuthors();

  return (
    <div className={ styles.listFavoriteAuthorsContainer }>
      <div className={ styles.listFavoriteAuthorsHeader }>
        <h2>Artistas favoritos</h2>
        <span>ver todos</span>
      </div>
      <div className={ styles.listFavoriteAuthors }>
        {
          data?.map((author) => (
            <Author key={ author.id } { ...author } />
          ))
        }
      </div>
    </div>
  );
}

export default React.memo(ListFavoriteAuthors);
