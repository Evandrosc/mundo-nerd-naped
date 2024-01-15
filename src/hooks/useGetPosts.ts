import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../api'

export function useGetPosts() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getPosts,
    staleTime: Infinity,
  })
}