import { screen } from '@testing-library/react';
import { renderWithRouter } from '../utils/renderWithRouter';
import LibraryHeader from '../components/library-header';
import { BookFiltersTypes } from '../types/bookFiltersTypes';

describe('Testing the library header component', () => {
  it('Testing whether elements are rendered and filters are changed', async () => {
    let filter = BookFiltersTypes.ALLBOOKS;
    const { user } = renderWithRouter(<LibraryHeader filterBooks={ filter } setFilterBooks={ (value) => { filter = value; } } />);

    const filterAllBooks = screen.getByTestId('filter-allbooks');
    expect(filterAllBooks).toBeInTheDocument();
    expect(filterAllBooks).toHaveClass('_libraryFilterBook_8080d7');

    expect(filter).toBe(BookFiltersTypes.ALLBOOKS);

    const filterRomance = screen.getByTestId('filter-romance');
    expect(filterRomance).toBeInTheDocument();
    expect(filterRomance).toHaveClass('_libraryFiltersList_8080d7');

    await user.click(filterRomance);

    expect(filter).toBe(BookFiltersTypes.ROMANCE);

    const filterAdventure = screen.getByTestId('filter-adventure');
    expect(filterAdventure).toBeInTheDocument();
    expect(filterAdventure).toHaveClass('_libraryFiltersList_8080d7');

    await user.click(filterAdventure);

    expect(filter).toBe(BookFiltersTypes.ADVENTURE);

    const filterComedy = screen.getByTestId('filter-comedy');
    expect(filterComedy).toBeInTheDocument();
    expect(filterComedy).toHaveClass('_libraryFiltersList_8080d7');

    await user.click(filterComedy);

    expect(filter).toBe(BookFiltersTypes.COMEDY);
  });
});
