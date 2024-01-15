import { useMemo } from 'react'
import { useGetPosts } from './useGetPosts'

export function useFilterPosts(gender: string) {
  const { data } = useGetPosts()

  const filteredPosts = useMemo(() => {
    if (!data) {
      return null
    }

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

  if (filteredPosts) {
    return filteredPosts
  }

  return null
}