import { IBook } from '../../types/booksFetchResponse';

function BookCard(props : IBook) {
  return (
    <div>
      <img
        src={ props?.cover }
        alt={ props?.name }
      />
      <div>
        <h3>{ props?.name }</h3>
        <p>
          { props?.author.name }
        </p>
      </div>
    </div>
  );
}

export default BookCard;
