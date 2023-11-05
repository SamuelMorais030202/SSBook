import { useNavigate } from 'react-router-dom';
import BookCard from '../../components/book';
import Header from '../../components/header';
import { useLocalStorageBooks } from '../../hooks/useLocalStorageBooks';
import iconFavorit from '../../assets/icon-heart.png';
import iconBeak from '../../assets/icon-back.png';
import styles from './favoriteBook.module.css';

function FavoriteBooks() {
  const { listBook, removeBookFromLocalStorage } = useLocalStorageBooks();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <h1 className={ styles.title }>
        <button
          onClick={ () => navigate('/') }
        >
          <img src={ iconBeak } alt="Voltar" />
        </button>
        Livros Favoritos
      </h1>
      <div className={ styles.books }>
        {
          listBook.length === 0
            ? <h2>Você ainda não tem livros favoritos</h2>
            : (
              listBook.map((book, index) => (
                <div key={ index } className={ styles.bookCard }>
                  <BookCard { ...book } />
                  <div className={ styles.icons }>
                    <button
                      onClick={ () => removeBookFromLocalStorage(book.id) }
                    >
                      <img
                        src={ iconFavorit }
                        alt={ book.name }
                        className={ styles.iconFavorite }
                      />
                      Desfavoritar
                    </button>
                  </div>
                </div>
              ))
            )
        }
      </div>
    </>
  );
}

export default FavoriteBooks;
