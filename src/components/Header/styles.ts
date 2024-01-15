import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2.6rem;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  gap: 6rem;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    gap: 0;

    width: 100%;
  }
`

export const Navigation = styled.div`

  @media screen and (max-width: 950px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  a {
    color: ${props => props.theme.brandColor};
    font-size: 2.4rem;
  }
`

interface NavbarProps {
  $active: boolean;
}

export const Navbar = styled.nav<NavbarProps>`
  display: flex;
  align-items: center;
  gap: 6rem;
  
  @media screen and (max-width: 950px) {
    display: ${props => props.$active ? 'flex' : 'none'};
    flex-direction: column;
    padding: 1.5rem 0;

    background-color: ${props => props.theme.dark10};
    width: 100%;
    
  }

  a {
    color: ${props => props.theme.dark40};
    font-size: 1.6rem;
    border-bottom: 2px solid transparent;
    font-weight: 500;

    &.active {
      border-bottom-color: ${props => props.theme.brandColor};
    }

    &:not(.active):hover {
      border-bottom-color: ${props => props.theme.brandColor};
    }
  }
`

export const Button = styled.button`
  color: ${props => props.theme.dark40};
  background-color: transparent;

  border: 3px solid ${props => props.theme.brandColor};
  border-radius: 3rem;

  font-family: ${props => props.theme.lexendDeca};

  padding: .5rem 2rem;

  font-size: 1.4rem;

  cursor: pointer;

  @media screen and (max-width: 950px) {
    width: 100%;
    line-height: 3.4rem;
    margin-top: 3.2rem;
  }
`