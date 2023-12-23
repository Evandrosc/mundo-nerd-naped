import { Outlet } from 'react-router-dom'

import { MainContainer } from './styles'
import { Loader } from './styles'
import { useGetPosts } from '../../hooks/useGetPosts'

export function Main() {

  const {isLoading } = useGetPosts()

  return (
    <MainContainer>
      {isLoading ? <Loader><div></div></Loader> : <Outlet />}
    </MainContainer>
  )
}