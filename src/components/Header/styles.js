import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.6rem;

  span {
    color: ${props => props.theme.brandColor};
    font-size: 2.4rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8.4rem;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 6rem;
  
  @media screen and (max-width: 950px) {
    display: ${props => props.$active ? 'flex' : 'none'};
    flex-direction: column;

    position: fixed;
    z-index: 1;
    top: 6.3rem;
    left: 50%;
    transform: translate(-50%);
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
    height: 3.4rem;
    margin-top: 3.2rem;
  }
`