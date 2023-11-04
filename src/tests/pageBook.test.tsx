import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Testing book description page', () => {
  it('Testing whether navigation occurs correctly', async () => {
    const { user } = renderWithRouter(<App />);

    const titleBook = await screen.findByText('The Return');
    expect(titleBook).toBeInTheDocument();

    await user.click(titleBook);

    const bookName = await screen.findByTestId('book-name');
    expect(bookName).toBeInTheDocument();

    const authorName = await screen.findByTestId('author-name');
    expect(authorName).toBeInTheDocument();

    const bookDescription = await screen.findByTestId('book-description');
    expect(bookDescription).toBeInTheDocument();
  });
});
