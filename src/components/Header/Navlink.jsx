import { NavLink } from 'react-router-dom'

export function Navlink(isMobile, onCloseNavbar) {

  function handleClick() {
    if (!isMobile) return

    onCloseNavbar(active => !active)
  }

  return (
    <>
      <NavLink to='/' onClick={handleClick}>Home</NavLink>
      <NavLink to='/Séries' onClick={handleClick}>Séries</NavLink>
      <NavLink to='/Filmes' onClick={handleClick}>Filmes</NavLink>
      <NavLink to='/Animes' onClick={handleClick}>Animes</NavLink>
      <NavLink to='/Games' onClick={handleClick}>Games</NavLink>
    </>
  )
}