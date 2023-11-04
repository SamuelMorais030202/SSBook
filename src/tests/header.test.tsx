import { screen } from '@testing-library/react';
import Header from '../components/header';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Testing the header component', () => {
  it('Testing whether elements are being rendered', () => {
    renderWithRouter(<Header />);

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
