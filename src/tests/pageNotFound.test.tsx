import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Testing page not found', () => {
  it('Testing whether not found is rendered', async () => {
    const { user } = renderWithRouter(<App />, { route: '/*' });

    const title = screen.getByRole('heading', {
      name: /oops! Página não encontrada/i,
    });

    const subtitle = screen.getByText('Desculpe, a página que você está procurando não existe.');

    const link = screen.getByRole('heading', {
      name: /voltar à página inicial/i,
    });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(link).toBeInTheDocument();

    await user.click(link);

    const logoHome = screen.getByRole('img', {
      name: /logo ssbook/i,
    });

    expect(logoHome).toBeInTheDocument();
  });
});
