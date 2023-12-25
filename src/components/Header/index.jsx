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

  function handleCloseNavbar() {
    if (widthDisplay < maxMobileWidthDisplay && activeNavbar) {
      setActiveNavbar(value => !value)
    }
  }


  const btnAccount = <Button type='button'>Minha conta</Button>
  const maxMobileWidthDisplay = 950

  return (
    <header>
      <HeaderContainer>
        <span>Naped</span>
        <div>
          <NavContainer $active={activeNavbar ? true : false}>
            <NavLink to='/' onClick={handleCloseNavbar}>Home</NavLink>
            <NavLink to='/Séries' onClick={handleCloseNavbar}>Séries</NavLink>
            <NavLink to='/Filmes' onClick={handleCloseNavbar}>Filmes</NavLink>
            <NavLink to='/Animes' onClick={handleCloseNavbar}>Animes</NavLink>
            <NavLink to='/Games' onClick={handleCloseNavbar}>Games</NavLink>
          </NavContainer>
          {widthDisplay >= maxMobileWidthDisplay && btnAccount}
          <MenuIcon activeNavbar={activeNavbar} onActiveNavbar={setActiveNavbar} />
        </div>
      </HeaderContainer>
      {widthDisplay < maxMobileWidthDisplay && btnAccount}
    </header>
  )
}