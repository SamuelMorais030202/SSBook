import React from 'react';
import ListFavoriteAuthors from '../list-favorite-authors';
import styles from './dashboardLibrary.module.css';

function DashboardLibrary() {
  return (
    <div className={ styles.container }>
      <div className={ styles.dashboardLibraryContainer }>
        <ListFavoriteAuthors />
      </div>
    </div>
  );
}

export default React.memo(DashboardLibrary);
