import { useParams } from 'react-router-dom';
import { useBookId } from '../../hooks/useBookId';
import iconHeart from '../../assets/icon-heart.png';
import iconToShare from '../../assets/to-share.png';
import iconDownload from '../../assets/icon-download.png';

function Book() {
  const params = useParams();
  const { data } = useBookId(params?.bookId as string);

  return (
    <article>
      <section>
        <img src={ data?.cover } alt="Author" />
        <ul>
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
      <section>
        <div>
          <h2>{ data?.name }</h2>
          <p>{ data?.author.name }</p>
        </div>
        <div>
          { data?.description }
        </div>
      </section>
    </article>
  );
}

export default Book;
