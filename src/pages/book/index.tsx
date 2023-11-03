/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useBookId } from '../../hooks/useBookId';
import iconHeart from '../../assets/icon-heart.png';
import iconToShare from '../../assets/to-share.png';
import iconDownload from '../../assets/icon-download.png';
import styles from './book.module.css';

function Book() {
  const params = useParams();
  const { data } = useBookId(params?.bookId as string);

  if (!data) {
    return <div>Carregando...</div>;
  }

  const paragraphs = data.description?.split('\n\n');

  return (
    <article className={ styles.bookPage }>
      <div className={ styles.bookPageContainer }>

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
          <div className={ styles.bookDescrptionHeader }>
            <h2>{ data?.name }</h2>
            <p>{ data?.author.name }</p>
          </div>
          <div className={ styles.bookDescriptionText }>
            {
              paragraphs?.map((paragraph, index) => (
                <p key={ index }>{ paragraph }</p>
              ))
            }
          </div>
        </section>

      </div>
    </article>
  );
}

export default React.memo(Book);
