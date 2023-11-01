import { useQuery } from 'react-query';
import { IBook } from '../types/booksFetchResponse';
import { fetche } from '../utils/fetcheApi';
import { allBooks } from '../utils/graphql';

export function useAllBooks() {
  const query = allBooks();
  const { data } = useQuery({
    queryFn: () => fetche(query),
    queryKey: ['allBooks'],
    staleTime: 1000 * 60 * 1,

  });

  const response = data?.data?.data?.allBooks;

  return { data: response as IBook[] };
}
