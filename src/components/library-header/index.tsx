/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styles from './libraryHeader.module.css';

interface ILibraryHeaderProps {
  filterBooks: string;
  setFilterBooks: (value: string) => void;
}

function LibraryHeader({ filterBooks, setFilterBooks } : ILibraryHeaderProps) {
  return (
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
  );
}

export default React.memo(LibraryHeader);
