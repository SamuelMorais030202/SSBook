import { screen } from '@testing-library/react';
import { renderWithRouter } from '../utils/renderWithRouter';
import App from '../App';

describe('Testing the home screen', () => {
  it('Testing if the header is being rendered correctly', () => {
    renderWithRouter(<App />);

    const soon = screen.getByRole('img', { name: /logo ssbook/i });
    const inputSearch = screen.getByTestId('input-search');
    const iconSearch = screen.getByTestId('icon-search');
    const iconAdd = screen.getByTestId('icon-add');
    const iconFavorite = screen.getByTestId('icon-favorite');
    const iconProfile = screen.getByTestId('icon-profile');

    expect(soon).toBeInTheDocument();
    expect(inputSearch).toBeInTheDocument();
    expect(iconSearch).toBeInTheDocument();
    expect(iconAdd).toBeInTheDocument();
    expect(iconFavorite).toBeInTheDocument();
    expect(iconProfile).toBeInTheDocument();
  });
});
