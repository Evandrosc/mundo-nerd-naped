import { useState, useEffect } from 'react'
import { MenuIcon } from './MenuIcon'
import { Button, HeaderContainer, NavContainer } from './styles'
import { Navlink } from './Navlink'

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



const navlinkDesktop = <Navlink />
const navlinkMobile = <Navlink isMobile onCloseNavbar={setActiveNavbar} />

  const btnAccount = <Button type='button'>Minha conta</Button>
  const maxMobileWidthDisplay = 950

  return (
    <header>
      <HeaderContainer>
        <span>Naped</span>
        <div>
          <NavContainer $active={activeNavbar ? true : false}>
            {widthDisplay >= maxMobileWidthDisplay ? navlinkDesktop : navlinkMobile}
          </NavContainer>
          {widthDisplay >= maxMobileWidthDisplay && btnAccount}
          <MenuIcon activeNavbar={activeNavbar} onActiveNavbar={setActiveNavbar} />
        </div>
      </HeaderContainer>
      {widthDisplay < maxMobileWidthDisplay && btnAccount}
    </header>
  )
}