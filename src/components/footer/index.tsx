import logoFooter from '../../assets/logo-footer.png';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={ styles.footerContainer }>
      <div>
        <img src={ logoFooter } alt="Logo footer" />
        <p>
          Todos os direitos reservados.
          <br />
          Studio Sol Books @ 2023
        </p>
      </div>
    </footer>
  );
}

export default Footer;
