/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import soon from '../../assets/soon.png';
import iconSearch from '../../assets/icon-search.png';
import iconAdd from '../../assets/icon-add.png';
import iconFavorite from '../../assets/icon-heart.png';
import avatar from '../../assets/avatar.png';

function Header() {
  const navigate = useNavigate();

  return (
    <header className={ styles.headerContainer }>
      <img src={ soon } alt="Logo SSBook" className={ styles.headerLogo } />
      <label
        htmlFor="search-book"
        className={ styles.headerSearchLabel }
      >
        <input
          type="text"
          placeholder="Busque um livro"
          id="search-book"
          data-testid="input-search"
        />
        <img src={ iconSearch } alt="Icon search" data-testid="icon-search" />
      </label>
      <nav>
        <ul className={ styles.headerNavList }>
          <li>
            <img src={ iconAdd } alt="Icon Add" data-testid="icon-add" />
            Adicionar
          </li>
          <li
            onClick={ () => navigate('/favorite-books') }
          >
            <img src={ iconFavorite } alt="Icon Favorite" data-testid="icon-favorite" />
            Favoritos
          </li>
          <hr />
          <li>
            <img src={ avatar } alt="Icon Avatar" data-testid="icon-profile" />
            Perfil
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
