/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IBook } from '../../types/booksFetchResponse';
import iconBack from '../../assets/icon-back.png';
import iconOverflow from '../../assets/icon-overflow.png';
import favoriteIcon from '../../assets/favorite-icon.png';
import Footer from '../footer';
import styles from './bookDescrptionSmallScreens.module.css';

function BookDescriptionSmallScreens({
  author,
  cover,
  name,
  description,
} : IBook) {
  const paragraphs = description?.split('\n\n');
  const navigate = useNavigate();

  return (
    <>
      <div
        className={ styles.styleForSmallScreens }
      >
        <section
          style={ {
            backgroundImage: `url(${cover})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          } }
          className={ styles.headerSmallScreens }
        >
          <header className={ styles.iconsSmallScreens }>
            <button onClick={ () => navigate('/') }>
              <img src={ iconBack } alt="Icon back" />
            </button>
            <button>
              <img src={ iconOverflow } alt="Icon overflow" />
            </button>
          </header>
        </section>

        <section className={ styles.descriptionSmallScreens }>
          <header className={ styles.headerDescriptionSmallScreens }>
            <h2>{ name }</h2>
            <span><img src={ favoriteIcon } alt="Favorite icon" /></span>
          </header>
          <p className={ styles.nameAuthor }>{ author.name }</p>
          <div className={ styles.textDescriptionSmallScreens }>
            {
              paragraphs?.map((paragraph, index) => (
                <p key={ index }>{ paragraph }</p>
              ))
            }
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default React.memo(BookDescriptionSmallScreens);
