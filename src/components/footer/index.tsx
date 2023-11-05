/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import logoFooter from '../../assets/soon-footer.png';
import styles from './footer.module.css';
import start from '../../assets/start.png';
import add from '../../assets/add.png';
import heart from '../../assets/icon-heart.png';
import search from '../../assets/icon-search.png';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className={ styles.footerContainer }>
      <div className={ styles.footerForLargerScreens }>
        <img src={ logoFooter } alt="Logo footer" />
        <p>
          Todos os direitos reservados.
          <br />
          Studio Sol Books @ 2023
        </p>
      </div>
      <div className={ styles.footerForSmallScreens }>
        <ul className={ styles.footerIcons } data-testid="icons-footer">
          <li>
            <img src={ start } alt="Start icon" />
            Início
          </li>
          <li>
            <img src={ add } alt="To add icon" />
            Adicionar
          </li>
          <li>
            <img src={ search } alt="Search icon" />
            Buscar
          </li>
          <li
            onClick={ () => navigate('/favorite-books') }
          >
            <img src={ heart } alt="Heart icon" />
            Favoritos
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
