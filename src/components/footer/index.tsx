import logoFooter from '../../assets/logo-footer.png';
import styles from './footer.module.css';
import start from '../../assets/start.png';
import add from '../../assets/add.png';
import heart from '../../assets/icon-coracao.png';
import search from '../../assets/lupa.png';

function Footer() {
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
        <ul className={ styles.footerIcons }>
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
          <li>
            <img src={ heart } alt="Heart icon" />
            Favoritos
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
