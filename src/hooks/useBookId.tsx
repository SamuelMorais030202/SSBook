import { useQuery } from 'react-query';
import { fetche } from '../utils/fetcheApi';
import { bookId } from '../utils/graphql';

export function useBookId(id : string) {
  const query = bookId(id);
  const { data } = useQuery({
    queryFn: () => fetche(query),
    queryKey: ['book'],
    staleTime: 1000 * 60 * 1,
  });

  const response = data?.data?.data?.book;

  return { data: response };
}
