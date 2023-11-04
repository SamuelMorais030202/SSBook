import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export function renderWithRouter(ui: JSX.Element, { route = '/' } = {}) {
  window.history.pushState({}, '', route);

  return {
    user: userEvent.setup(),
    ...render(
      <QueryClientProvider client={ queryClient }>
        <BrowserRouter>
          {ui}
        </BrowserRouter>
      </QueryClientProvider>,
    ),
  };
}
