import { screen } from '@testing-library/react';
import Footer from '../components/footer';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Testing the footer component', () => {
  it('Testing whether elements are rendered', () => {
    renderWithRouter(<Footer />);

    const logoFooter = screen.getByRole('img', { name: /logo footer/i });
    expect(logoFooter).toBeInTheDocument();

    const description = screen.getByText(/todos os direitos reservados\.studio sol books @ 2023/i);
    expect(description).toBeInTheDocument();
  });

  it('Testing whether elements render on small screens', () => {
    renderWithRouter(<Footer />);

    const icons = screen.getByTestId('icons-footer');
    expect(icons).toBeInTheDocument();
  });
});
