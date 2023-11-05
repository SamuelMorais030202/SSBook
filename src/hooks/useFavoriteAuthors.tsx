import { useQuery } from 'react-query';
import { IAuthor } from '../types/booksFetchResponse';
import { fetche } from '../utils/fetcheApi';
import { favoriteAuthors } from '../utils/graphql';

export function useFavoriteAuthors() {
  const query = favoriteAuthors();
  const { data, isLoading } = useQuery({
    queryFn: () => fetche(query),
    queryKey: ['favoriteAuthors'],
    staleTime: 1000 * 60 * 1,
  });

  const reponse = data?.data?.data?.favoriteAuthors;

  return { data: reponse as IAuthor[], isLoading };
}
