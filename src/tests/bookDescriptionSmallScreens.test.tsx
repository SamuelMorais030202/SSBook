import { screen } from '@testing-library/react';
import BookDescriptionSmallScreens from '../components/bookDescriptionSmallScreens';
import { renderWithRouter } from '../utils/renderWithRouter';
import mockData from './mock/favorite-books';

const favoriteBooks = mockData?.data?.favoriteBooks;

describe('Testing the book description component for small screens', () => {
  it('Testing whether elements are rendered', async () => {
    renderWithRouter(<BookDescriptionSmallScreens { ...favoriteBooks[0] } />);

    const bookName = screen.getByText(favoriteBooks[0].name);
    const iconHeart = screen.getByTestId('favorite-icon');
    const iconNavigate = screen.getByTestId('icon-back');
    const nameAuthor = screen.getByText(favoriteBooks[0].author.name);

    expect(bookName).toBeInTheDocument();
    expect(iconHeart).toBeInTheDocument();
    expect(iconNavigate).toBeInTheDocument();
    expect(nameAuthor).toBeInTheDocument();
  });
});
