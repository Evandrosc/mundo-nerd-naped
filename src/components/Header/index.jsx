import { useState, useEffect } from 'react'
import { MenuIcon } from './MenuIcon'
import { Button, HeaderContainer, NavContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  const [activeNavbar, setActiveNavbar] = useState(false)
  const [widthDisplay, setWidthDisplay] = useState(window.outerWidth)

  function handleResize () {
    setWidthDisplay(window.outerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])



  const btnAccount = <Button type='button'>Minha conta</Button>
  const maxMobileWidthDisplay = 950

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
          {widthDisplay >= maxMobileWidthDisplay && btnAccount}
          <MenuIcon activeNavbar={activeNavbar} onActiveNavbar={setActiveNavbar} />
        </div>
      </HeaderContainer>
      {widthDisplay < maxMobileWidthDisplay && btnAccount}
    </header>
  )
}