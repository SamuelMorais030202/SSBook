import { useQuery } from 'react-query';
import { favoriteBooks } from '../utils/graphql';
import { fetche } from '../utils/fetcheApi';
import { IBook } from '../types/booksFetchResponse';

export function useFavoriteBooks() {
  const query = favoriteBooks();
  const { data } = useQuery({
    queryFn: () => fetche(query),
    queryKey: ['favoriteBooks'],
    staleTime: 1000 * 60 * 1,
  });

  const response = data?.data?.data?.favoriteBooks;

  return { data: response as IBook[] };
}
