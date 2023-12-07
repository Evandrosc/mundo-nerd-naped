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
  
  @media screen and (max-width: 768px) {
    display: ${props => props.$active ? 'flex' : 'none'};
    flex-direction: column;

    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    padding-top: 6rem;

    background-color: ${props => props.theme.dark10};

    width: 100%;
    height: 100vh;
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

  padding: .5rem 2rem;

  font-size: 1.4rem;

  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`