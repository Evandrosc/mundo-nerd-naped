import styled from 'styled-components'
import { LinearGradient } from '../../styles/Variaveis'

export const SectionContainer = styled.section`
  max-width: 49.2rem;
  margin-top: 11.4rem;
  margin-bottom: 8rem;

  @media screen and (max-width: 950px) {
    margin-top: 4.8rem;
    margin-bottom: 3.2rem;
  }

  h1 {
    color: ${props => props.theme.dark40};
    font-size: clamp(2.4rem, 6.2vw, 4.8rem);
    font-weight: 400;
    max-width: 30.3rem;
    margin-bottom: 1.1rem;
  }

  p {
    color: ${props => props.theme.dark30};
    font-size: clamp(1.4rem, 4.2vw, 2rem);
    font-weight: 500;
    line-height: min(140%, 3.2rem);
  }
`

export const SectionPostsDestaque = styled.section`
  display: flex;
  gap: 0 2rem;
  overflow-y: hidden;

  > a {
    position: relative;
    width: 100%;
    height: 35rem;

    ${LinearGradient}

    span {
      position: absolute;
      top: 1.7rem;
      left: 3rem;

      font-size: 1.4rem;

      color: ${props => props.theme.dark40};
      background-color: ${props => props.theme.brandColor};

      width: 8rem;
      line-height: 2.5rem;
      text-align: center;
      border-radius: 3px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 30%;
    }


    h3 {
      position: absolute;
      bottom: 1.5rem;
      left: 3rem;

      width: 85%;
      max-width: 70.1rem;

      color: ${props => props.theme.dark40};
      font-size: clamp(1.4rem, 4.1vw, 2.4rem);
      line-height: clamp(1.8rem, 4.1vw, 3.4rem);
      font-weight: 400;
    }
  }
  
  aside {
    height: 35rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (max-width: 1024px) {
      display: none;
    }

    a {
      position: relative;
      width: 33.8rem;
      height: 16.5rem;

      ${LinearGradient}
      
      span {
        position: absolute;
        top: 1rem;
        left: 1rem;

        font-size: 1.2rem;

        color: ${props => props.theme.dark40};
        background-color: ${props => props.theme.brandColor};

        width: 7rem;
        line-height: 2rem;
        text-align: center;
        border-radius: 3px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 0%;
      }

      h3 {
        position: absolute;
        bottom: 1rem;
        left: 1.5rem;

        color: ${props => props.theme.dark40};
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 2rem;

        max-width: 30.3rem;
      }
    }
  }
`

export const SectionPostsPrincipal = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2.2rem;
  
  margin-top: 5rem;
  margin-bottom: 9.9rem;

  @media screen and (max-width: 950px) {
    margin: 4.8rem 0;
  }

  section {
    width: 100%;
    max-height: 89.4rem;

    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 3.5rem;

    @media screen and (max-width: 1024px) {
      max-height: 37.8rem;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    max-height: 89.4rem;

    @media screen and (max-width: 1024px) {
      display: none;
    }

    h2 {
      color: ${props => props.theme.dark40};
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 2rem;
      margin-bottom: 1.4rem;

      &:after {
        content: '';
        background-color: ${props => props.theme.brandColor};
        
        display: inline-block;
        width: 25rem;
        height: .3rem;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 4.7rem;

      a {
        width: 33.8rem;
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

          color: ${props => props.theme.dark40};
          font-size: 1.3rem;
          font-weight: 400;

          line-height: 2rem;

          max-width: 30.3rem;
        }
      }
    }
  }
`

export const PostsPrincipaisContainer = styled.div`

  display: flex;
  gap: 1.8rem;

  div:first-child {
    position: relative;

    ${LinearGradient}
    
    span {
      position: absolute;
      top: 1rem;
      left: 1rem;

      color: ${props => props.theme.dark40};
      background-color: ${props => props.theme.brandColor};

      width: 6rem;
      line-height: 1.5rem;
      text-align: center;
      border-radius: 3px;
    }

    img {
      width: 20rem;
      height: 15.1rem;
      object-fit: cover;

      @media screen and (max-width: 768px) {
        width: 14.4rem;
        height: 11rem;
      }
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    height: 100%;
    max-width: 39.4rem;

    margin-right: 1rem;

    h3 {
      color: ${props => props.theme.dark40};
      font-size: 1.3rem;
      font-weight: 400;

      line-height: 2rem;

      @media screen and (max-width: 768px) {
        height: 4.4rem;
        overflow: hidden;
        font-size: 1.4rem;
      }
    }

    p {
      color: ${props => props.theme.dark30};
      font-size: 1.1rem;

      line-height: 1.6rem;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    time {
      color: ${props => props.theme.dark30};
      font-weight: 600;

      line-height: 2rem;

      @media screen and (max-width: 768px) {
        font-size: 1.2rem;
      }
    }

    a {
      color: ${props => props.theme.dark40};
      width: 10rem;
      line-height: 2.5rem;
      text-align: center;
      border-radius: 3px;

      font-size: 1.1rem;
      font-weight: 600;

      background: ${props => props.theme.brandColor};

      @media screen and (max-width: 768px) {
        font-size: 1rem;
        width: min(100%, 13.4rem);
        line-height: 2rem;
      }
    }
  }
`