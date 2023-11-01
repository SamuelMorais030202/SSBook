/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { SelectTabType } from '../../types/selectTabTypes';
import styles from './home.module.css';

function Home() {
  const [selectTab, setSelectTab] = useState(SelectTabType.MyBooks);

  const handleTabClick = (tabName : SelectTabType) => {
    setSelectTab(tabName);
  };

  return (
    <div className={ styles.homeContainer }>
      <div className={ styles.homeSelectTab }>
        <ul className={ styles.selectTab }>
          <li
            className={ selectTab === SelectTabType.MyBooks ? styles.active : '' }
            onClick={ () => handleTabClick(SelectTabType.MyBooks) }
          >
            Meus livros
          </li>
          <li
            className={ selectTab === SelectTabType.Borrowed ? styles.active : '' }
            onClick={ () => handleTabClick(SelectTabType.Borrowed) }
          >
            Emprestados
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Home;
