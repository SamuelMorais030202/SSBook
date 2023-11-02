import { IAuthor } from '../../types/booksFetchResponse';
import styles from './author.module.css';

function Author({ booksCount, name, picture } : IAuthor) {
  return (
    <section className={ styles.cardAuthor }>
      <img src={ picture } alt={ name } className={ styles.imageAuthor } />
      <div className={ styles.authorText }>
        <h4>{ name }</h4>
        <p>{ `${booksCount} livros` }</p>
      </div>
    </section>
  );
}

export default Author;
