import styled, { css } from 'styled-components'

interface MenuIconContainerProps {
  $isActiveNavbar: boolean;
}

export const MenuIconContainer = styled.div<MenuIconContainerProps>`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 950px) {
    display: block;
  }

  div {
    width: 32px;
    height: 2px;
    background-color: ${props => props.theme.dark40};
    margin: 8px;
    transition: transform 0.4s, opacity 0.4s;

    ${({ $isActiveNavbar }) =>
      $isActiveNavbar &&
      css`
        &:nth-child(1) {
          transform: rotate(-45deg) translate(-8px, 8px);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: rotate(45deg) translate(-6px, -6px);
        }
      `}
  }
`