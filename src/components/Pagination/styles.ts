import styled, { css } from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: .8rem;
`

interface ButtonProps {
  $active?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 3.2rem;
  height: 3.2rem;

  background-color: ${props => props.theme.dark20};
  color: ${props => props.theme.dark30};
  
  font-family: ${props => props.theme.inter};
  font-weight: 600;
  font-size: 1.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid transparent;
  border-radius: 3px;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;

    svg path {
      fill: #545454;
    }
  }

  &:not(:disabled):hover {
    color: ${props => props.theme.brandColor};
    border-color:${props => props.theme.brandColor};

    svg path {
      fill: ${props => props.theme.brandColor};
    }
  }

  ${props =>
    props.$active &&
    css`
      color: ${props => props.theme.brandColor};
      border-color: ${props => props.theme.brandColor};
    `
  }
`
