import { useGetPosts } from './useGetPosts'

export function useFilterPosts(genero) {
  const { data } = useGetPosts()

  return (
    data.destaque.principal.concat(
      data.destaque.secundario,
      data.principais.principal,
      data.principais.secundario,
      data.recentes
    )
      .filter(post => post.genero === genero)
  )
}