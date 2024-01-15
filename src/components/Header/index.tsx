import { useState, useEffect } from 'react'
import { MenuIcon } from './MenuIcon'
import { HeaderContainer, Navigation, NavbarContainer, Navbar, Button } from './styles'
import { NavLink } from 'react-router-dom'

const maxMobileWidthDisplay = 950

export function Header() {
  const [activeNavbar, setActiveNavbar] = useState(false)
  const [widthDisplay, setWidthDisplay] = useState(window.innerWidth)

  function handleResize() {
    setWidthDisplay(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function handleCloseNavbar() {
    if (widthDisplay < maxMobileWidthDisplay && activeNavbar) {
      setActiveNavbar(value => !value)
    }
  }

  return (
    <HeaderContainer tabIndex={0}>
      <Navigation>
        <NavLink to='/' tabIndex={-1}>Naped</NavLink>
        <MenuIcon activeNavbar={activeNavbar} onActiveNavbar={setActiveNavbar} />
      </Navigation>
      <NavbarContainer>
        <Navbar $active={activeNavbar ? true : false}>
          <NavLink to='/' onClick={handleCloseNavbar}>Home</NavLink>
          <NavLink to='/Séries' onClick={handleCloseNavbar}>Séries</NavLink>
          <NavLink to='/Filmes' onClick={handleCloseNavbar}>Filmes</NavLink>
          <NavLink to='/Animes' onClick={handleCloseNavbar}>Animes</NavLink>
          <NavLink to='/Games' onClick={handleCloseNavbar}>Games</NavLink>
        </Navbar>
        <Button type='button'>Minha conta</Button>
      </NavbarContainer>
    </HeaderContainer>
  )
}