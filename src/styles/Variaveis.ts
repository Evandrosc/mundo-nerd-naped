import { css } from 'styled-components'

export const LinearGradient = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, transparent, ${props => props.theme.dark10});
  }
`