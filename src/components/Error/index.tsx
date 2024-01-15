import { Link } from 'react-router-dom'

import img404 from '../../../public/image/404.svg'

import { ErrorContainer, HeaderContainer, MainContainer } from './styles'

export function Error() {
  return (
    <>
      <HeaderContainer>
        <span>Naped</span>
        <ErrorContainer>
          <span>404</span>
          <span>404</span>
          <span>404</span>
          <span>404</span>
          <span>404</span>
        </ErrorContainer>
      </HeaderContainer>
      <MainContainer>
        <section>
          <h1>Tenho más notícias para você!</h1>
          <p>A página que você está procurando pode ter sido removida ou está temporariamente indisponível.</p>
          <Link to='/'>Voltar a home</Link>
        </section>
        <section>
          <img src={img404} alt="" />
          <p>Ups! Você chegou no espaço... volte para o mundo nerd!</p>
        </section>
      </MainContainer>
    </>
  )
}