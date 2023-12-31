import { useGetPosts } from './useGetPosts'
import { useMemo } from 'react'

export function useFilterPosts(gender) {
  const { data } = useGetPosts()

  const filteredPosts = useMemo(() => {
    return (
      data.destaque.principal.concat(
        data.destaque.secundario,
        data.principais.principal,
        data.principais.secundario,
        data.recentes
      )
        .filter(post => post.genero === gender)
    )
  }, [data, gender])

  return filteredPosts
}