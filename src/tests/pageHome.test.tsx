import { screen } from '@testing-library/react';
import { renderWithRouter } from '../utils/renderWithRouter';
import App from '../App';
import mockData from './mock/favorite-books';
import { IAuthor, IBook } from '../types/booksFetchResponse';
import mockAuthorData from './mock/favorite-authors';

const favoriteBooks = mockData?.data?.favoriteBooks;
const favoriteAuthors = mockAuthorData?.data?.favoriteAuthors;

describe('Testing the home screen', () => {
  it('Testing that books are being listed correctly', async () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', { name: /livros favoritos/i });
    expect(title).toBeInTheDocument();

    async function rendeBooks(book : IBook) {
      const truncateTitle = book.name.length > 28
        ? `${book.name.slice(0, 28)}...`
        : book.name;

      const firstVardBookAuthor = await screen.findByTestId(`paragraph-${book.id}`);
      expect(firstVardBookAuthor).toBeInTheDocument();

      const firstCardBookTitle = await screen.findByRole('heading', { name: truncateTitle });
      expect(firstCardBookTitle).toBeInTheDocument();
    }

    favoriteBooks.forEach((book) => {
      rendeBooks(book);
    });
  });

  it('Testing whether authors render correctly', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', { name: /autores favoritos/i });
    expect(title).toBeInTheDocument();

    async function renderAuthors(author : IAuthor) {
      const authorName = await screen.findByTestId(`author-${author.name}`);
      expect(authorName).toBeInTheDocument();

      const booksCouter = await screen.findByTestId(`author-${author.name}-${author.booksCount}`);
      expect(booksCouter).toBeInTheDocument();
    }

    favoriteAuthors.forEach((author) => {
      renderAuthors(author);
    });
  });
});
