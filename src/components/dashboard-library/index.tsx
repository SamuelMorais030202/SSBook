import React from 'react';
import Library from '../library';
import ListFavoriteAuthors from '../list-favorite-authors';
import styles from './dashboardLibrary.module.css';

function DashboardLibrary() {
  return (
    <div className={ styles.container }>
      <div className={ styles.dashboardLibraryContainer }>
        <ListFavoriteAuthors />
        <Library />
      </div>
    </div>
  );
}

export default React.memo(DashboardLibrary);
