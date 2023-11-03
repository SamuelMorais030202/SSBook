import { Route, Routes as Switch } from 'react-router-dom';
import Layout from '../components/layout';
import Book from '../pages/book';
import FavoriteBooks from '../pages/favorite-books';
import Home from '../pages/home';
import NotFound from '../pages/not-found';

function Routes() {
  return (
    <Switch>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="favorite-books" element={ <FavoriteBooks /> } />
        <Route path="books/:bookId" element={ <Book /> } />
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Switch>
  );
}

export default Routes;
