/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useBookId } from '../../hooks/useBookId';
import iconHeart from '../../assets/icon-heart.png';
import iconToShare from '../../assets/to-share.png';
import iconDownload from '../../assets/icon-download.png';
import styles from './book.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BookDescriptionSmallScreens from '../../components/bookDescriptionSmallScreens';

function Book() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const params = useParams();
  const { data } = useBookId(params?.bookId as string);

  if (!data) {
    return <div>Carregando...</div>;
  }

  const paragraphs = data.description?.split('\n\n');

  if (isSmallScreen) {
    return <BookDescriptionSmallScreens { ...data } />;
  }

  return (
    <>
      <Header />
      <main className={ styles.bookPage }>
        <section className={ styles.bookPageContainer }>

          <section className={ styles.firstCardBook }>
            <img src={ data?.cover } alt="Author" className={ styles.imageBook } />
            <ul className={ styles.optionsForTheBook }>
              <li>
                <img src={ iconHeart } alt="Icon heart" />
                Favoritar
              </li>
              <li>
                <img src={ iconToShare } alt="Icon to share" />
                Compartilhar
              </li>
              <li>
                <img src={ iconDownload } alt="Icon download" />
                Salvar em uma lista
              </li>
            </ul>
          </section>
          <section className={ styles.bookDescriptions }>
            <header className={ styles.bookDescrptionHeader }>
              <h2 data-testid="book-name">{ data?.name }</h2>
              <p data-testid="author-name">{ data?.author.name }</p>
            </header>
            <div className={ styles.bookDescriptionText } data-testid="book-description">
              {
                paragraphs?.map((paragraph, index) => (
                  <p key={ index }>{ paragraph }</p>
                ))
              }
            </div>
          </section>

        </section>
      </main>
      <Footer />
    </>
  );
}

export default React.memo(Book);
