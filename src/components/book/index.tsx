import { Link } from 'react-router-dom';
import { IBook } from '../../types/booksFetchResponse';

function BookCard({ author, cover, name, id } : IBook) {
  const truncateTitle = name.length > 28
    ? `${name.slice(0, 28)}...`
    : name;

  return (
    <Link to={ `/books/${id}` }>
      <img
        src={ cover }
        alt={ name }
      />
      <div>
        <h4 data-testid={ `title-book-${id}` }>{ truncateTitle }</h4>
        <p
          data-testid={ `paragraph-${id}` }
        >
          { author.name }
        </p>
      </div>
    </Link>
  );
}

export default BookCard;
