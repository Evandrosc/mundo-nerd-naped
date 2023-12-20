import { useGetPosts } from "./useGetPosts"

export function useListAllPosts() {
  const { data } = useGetPosts()

  return [
    ...data.destaque.principal,
    ...data.destaque.secundario,
    ...data.principais.principal,
    ...data.principais.secundario,
    ...data.recentes
  ]
}