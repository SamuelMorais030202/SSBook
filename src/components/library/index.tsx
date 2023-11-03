import React, { useState } from 'react';
import { useAllBooks } from '../../hooks/useAllBooks';
import BookCard from '../book';
import LibraryHeader from '../library-header';
import styles from './library.module.css';

function Library() {
  const [filterBooks, setFilterBooks] = useState('ALLBOOKS');
  const { data } = useAllBooks();

  const filteredBooks = filterBooks === 'ALLBOOKS'
    ? data
    : data.filter((book) => book.category === filterBooks);

  return (
    <div className={ styles.libraryContainer }>
      <LibraryHeader filterBooks={ filterBooks } setFilterBooks={ setFilterBooks } />
      <div className={ styles.listOfBooks }>
        {
          filteredBooks?.map((book) => (
            <BookCard key={ book.id } { ...book } />
          ))
        }
      </div>
    </div>
  );
}

export default React.memo(Library);
