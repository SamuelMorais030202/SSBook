/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useAllBooks } from '../../hooks/useAllBooks';
import BookCard from '../book';
import styles from './library.module.css';

function Library() {
  const [filterBooks, setFilterBooks] = useState('ALLBOOKS');
  const { data } = useAllBooks();

  return (
    <div className={ styles.libraryContainer }>
      <div className={ styles.libraryHeader }>
        <h2>Biblioteca</h2>
        <ul className={ styles.libraryFilters }>
          <li
            className={ filterBooks === 'ALLBOOKS'
              ? styles.libraryFilterBook : styles.libraryFiltersList }
            onClick={ () => setFilterBooks('ALLBOOKS') }
          >
            Todos
          </li>
          <li
            className={ filterBooks === 'ROMANCE'
              ? styles.libraryFilterBook : styles.libraryFiltersList }
            onClick={ () => setFilterBooks('ROMANCE') }
          >
            Romance
          </li>
          <li
            className={ filterBooks === 'ADVENTURE'
              ? styles.libraryFilterBook : styles.libraryFiltersList }
            onClick={ () => setFilterBooks('ADVENTURE') }
          >
            Aventura
          </li>
          <li
            className={ filterBooks === 'COMEDY'
              ? styles.libraryFilterBook : styles.libraryFiltersList }
            onClick={ () => setFilterBooks('COMEDY') }
          >
            Comédia
          </li>
        </ul>
      </div>
      <div className={ styles.listOfBooks }>
        {
          data?.map((book) => (
            <BookCard key={ book.id } { ...book } />
          ))
        }
      </div>
    </div>
  );
}

export default React.memo(Library);
