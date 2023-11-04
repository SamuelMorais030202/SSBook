/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styles from './libraryHeader.module.css';
import { BookFiltersTypes } from '../../types/bookFiltersTypes';

interface ILibraryHeaderProps {
  filterBooks: number;
  setFilterBooks: (value: number) => void;
}

function LibraryHeader({ filterBooks, setFilterBooks } : ILibraryHeaderProps) {
  return (
    <div className={ styles.libraryHeader }>
      <h1>Biblioteca</h1>
      <ul className={ styles.libraryFilters }>
        <li
          className={ filterBooks === BookFiltersTypes.ALLBOOKS
            ? styles.libraryFilterBook : styles.libraryFiltersList }
          onClick={ () => setFilterBooks(BookFiltersTypes.ALLBOOKS) }
          data-testid="filter-allbooks"
        >
          Todos
        </li>
        <li
          className={ filterBooks === BookFiltersTypes.ROMANCE
            ? styles.libraryFilterBook : styles.libraryFiltersList }
          onClick={ () => setFilterBooks(BookFiltersTypes.ROMANCE) }
          data-testid="filter-romance"
        >
          Romance
        </li>
        <li
          className={ filterBooks === BookFiltersTypes.ADVENTURE
            ? styles.libraryFilterBook : styles.libraryFiltersList }
          onClick={ () => setFilterBooks(BookFiltersTypes.ADVENTURE) }
          data-testid="filter-adventure"
        >
          Aventura
        </li>
        <li
          className={ filterBooks === BookFiltersTypes.COMEDY
            ? styles.libraryFilterBook : styles.libraryFiltersList }
          onClick={ () => setFilterBooks(BookFiltersTypes.COMEDY) }
          data-testid="filter-comedy"
        >
          Comédia
        </li>
      </ul>
    </div>
  );
}

export default React.memo(LibraryHeader);
