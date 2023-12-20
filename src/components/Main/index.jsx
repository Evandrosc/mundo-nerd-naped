import { Outlet } from 'react-router-dom'

import { MainContainer } from './styles'
import { Loader } from './styles'
import { useGetPosts } from '../../hooks/useGetPosts'

export function Main() {

  const {isLoading } = useGetPosts()

  if (isLoading) return <Loader><div></div></Loader>

  return (
    <MainContainer>
      {<Outlet />}
    </MainContainer>
  )
}