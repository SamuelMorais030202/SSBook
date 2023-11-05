import { screen } from '@testing-library/react';
import { renderWithRouter } from '../utils/renderWithRouter';
import Author from '../components/author';
import mockAuthorData from './mock/favorite-authors';

const authors = mockAuthorData?.data?.favoriteAuthors;

describe('Testing author component', () => {
  it('Testing that elements are rendered correctly', () => {
    renderWithRouter(<Author { ...authors[0] } />);

    const name = screen.getByText(authors[0].name);
    const booksCount = screen.getByText(`${authors[0].booksCount} livros`);
    const image = screen.getByRole('img', { name: authors[0].name });

    expect(name).toBeInTheDocument();
    expect(booksCount).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
