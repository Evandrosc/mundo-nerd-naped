import { useState } from 'react';
import { MenuIcon } from './MenuIcon';
import { Button, HeaderContainer, NavContainer } from './styles'
import { NavLink } from 'react-router-dom';

export function Header() {
  const [activeNavbar, setActiveNavbar] = useState(false)
  const widthDisplay = window.outerWidth

 

  const btnAccount = <Button type='button'>Minha conta</Button>

  return (
    <header>
      <HeaderContainer>
        <span>Naped</span>
        <div>
          <NavContainer $active={activeNavbar ? true : false}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Séries'>Séries</NavLink>
            <NavLink to='/Filmes'>Filmes</NavLink>
            <NavLink to='/Animes'>Animes</NavLink>
            <NavLink to='/Games'>Games</NavLink>
          </NavContainer>
          {widthDisplay > 768 && btnAccount}
          <MenuIcon activeNavbar={activeNavbar} onActiveNavbar={setActiveNavbar} />
        </div>
      </HeaderContainer>
      {widthDisplay <= 768 && btnAccount}
    </header>
  );
}