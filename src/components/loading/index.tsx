import React from 'react';
import styles from './loading.module.css';

function Loading() {
  return (
    <section className={ styles.loadingContainer }>
      <div className={ styles.loading } />
    </section>
  );
}

export default React.memo(Loading);
