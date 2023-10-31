import styles from './header.module.css';
import logo from '../../assets/logo.png';
import lupa from '../../assets/lupa.png';
import iconAdd from '../../assets/icon-adicionar.png';
import iconFavorite from '../../assets/icon-coracao.png';
import avatar from '../../assets/avatar.png';

function Header() {
  return (
    <header className={ styles.headerContainer }>
      <img src={ logo } alt="Logo SSBook" className={ styles.headerLogo } />
      <label htmlFor="search-book" className={ styles.headerSearchLabel }>
        <input
          type="text"
          placeholder="Busque um livro"
          id="search-book"
        />
        <img src={ lupa } alt="Lupa search" />
      </label>
      <nav>
        <ul className={ styles.headerNavList }>
          <li>
            <img src={ iconAdd } alt="Icon Add" />
            Adicionar
          </li>
          <li>
            <img src={ iconFavorite } alt="Icon Favorite" />
            Favoritos
          </li>
          <hr />
          <li>
            <img src={ avatar } alt="Icon Avatar" />
            Perfil
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
