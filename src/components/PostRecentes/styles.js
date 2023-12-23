import styled from 'styled-components'
import { LinearGradient } from '../../styles/Variaveis'

export const PostsRecentesContainer = styled.section`

  h2 {
    color: ${props => props.theme.dark40};
    font-size: clamp(1.8rem, 5vw, 2.4rem);
    font-weight: 400;
    line-height: 4rem;
    margin-bottom: 3.9rem;

    &:after {
      content: '';
      background-color: ${props => props.theme.brandColor};
      
      display: block;
      width: 58%;
      min-width: 18.8rem;
      max-width: 25rem;
      height: .3rem;
    }
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28.6rem, 1fr));
    gap: 5.2rem;

    a {
        width: 100%;
        height: 25rem;

        position: relative;

        ${LinearGradient}

        span {
          position: absolute;
          top: 1rem;
          left: 1rem;

          font-size: 1.2rem;

          width: 7rem;
          line-height: 2rem;
          text-align: center;
          border-radius: 3px;

          background-color: ${props => props.theme.brandColor};
          color: ${props => props.theme.dark40};
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        h3 {
          position: absolute;
          bottom: 1rem;
          left: 1.5rem;

          margin-right: 1rem;

          color: ${props => props.theme.dark40};
          font-size: 1.3rem;
          font-weight: 400;

          line-height: 2rem;

          max-width: 30.3rem;
        }
      }
  }
`