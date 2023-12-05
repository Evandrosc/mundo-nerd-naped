import { useState } from 'react';
import { MenuIcon } from './MenuIcon';
import { Button, HeaderContainer, NavContainer } from './styles'

export function Header() {
  const [activeNavbar, setActiveNavbar] = useState(false)
  const windthDisplay = window.outerWidth

 

  const btnAccount = <Button type='button'>Minha conta</Button>

  return (
    <header>
      <HeaderContainer>
        <span>Naped</span>
        <div>
          <NavContainer $active={activeNavbar ? true : false}>
            <a href="" className='active'>Home</a>
            <a href="">Séries</a>
            <a href="">Filmes</a>
            <a href="">Animes</a>
            <a href="">Games</a>
          </NavContainer>
          {windthDisplay > 768 && btnAccount}
          <MenuIcon activeNavbar={activeNavbar} onActiveNavbar={setActiveNavbar} />
        </div>
      </HeaderContainer>
      {windthDisplay <= 768 && btnAccount}
    </header>
  );
}