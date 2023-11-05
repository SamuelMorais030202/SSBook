import React, { useState } from 'react';
import { useAllBooks } from '../../hooks/useAllBooks';
import { BookFiltersTypes } from '../../types/bookFiltersTypes';
import BookCard from '../book';
import LibraryHeader from '../library-header';
import Loading from '../loading';
import styles from './library.module.css';

function Library() {
  const [filterBooks, setFilterBooks] = useState(BookFiltersTypes.ALLBOOKS);
  const { data, isLoading } = useAllBooks();

  const filteredBooks = filterBooks === BookFiltersTypes.ALLBOOKS
    ? data
    : data.filter((book) => book.category === BookFiltersTypes[filterBooks]);

  return (
    <section className={ styles.libraryContainer }>
      <LibraryHeader filterBooks={ filterBooks } setFilterBooks={ setFilterBooks } />
      <div className={ styles.listOfBooks }>
        {
          isLoading
            ? <Loading />
            : (
              filteredBooks?.map((book) => (
                <BookCard key={ book.id } { ...book } />
              ))
            )
        }
      </div>
    </section>
  );
}

export default React.memo(Library);
