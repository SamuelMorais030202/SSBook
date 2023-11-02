import { IBook } from '../../types/booksFetchResponse';

function BookCard({ author, cover, name } : IBook) {
  const truncateTitle = name.length > 25
    ? `${name.slice(0, 25)}...`
    : name;

  return (
    <section>
      <img
        src={ cover }
        alt={ name }
      />
      <div>
        <h4>{ truncateTitle }</h4>
        <p>
          { author.name }
        </p>
      </div>
    </section>
  );
}

export default BookCard;
