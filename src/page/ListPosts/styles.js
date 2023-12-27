import styled from 'styled-components'
import { LinearGradient } from '../../styles/Variaveis'


export const SectionTop = styled.section`
  width: 100%;
  height: 30rem;

  position: relative;

  margin: 4rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to left, transparent, ${props => props.theme.dark10});
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div {
    position: absolute;
    top: 50%;
    left: 4.5rem;
    transform: translateY(-50%);
    max-width: 49.2rem;

    @media screen and (max-width: 768px) {
      transform: translateY(0);
      top: auto;
      left: 1.6rem;
      bottom: 1.8rem;
    }
    
    h1 {
      font-size: clamp(2.4rem, 5.5vw, 4.8rem);
      font-weight: 400;
      margin-bottom: 1.5rem;
      color: ${props => props.theme.dark40};

      @media screen and (max-width: 768px) {
        margin-bottom: 1.2rem;
      }
    }

    p {
      font-size: clamp(1.2rem, 3.7vw, 2rem);
      font-weight: 500;
      color: ${props => props.theme.dark30};
      line-height: clamp(1.4rem, 4.2vw, 3.2rem);
    }
  }
`

export const FormFilterPost = styled.form`
  display: flex;

  input {
    width: 100%;
    font-size: clamp(1.3rem, 4vw, 2rem);
    background-color: ${props => props.theme.dark20};
    color: ${props => props.theme.dark30};
    border: none;
    outline: none;
    padding: 1.7rem 2.5rem;

    @media screen and (max-width: 482px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    &::placeholder {
      color: #989898;
      font-size: clamp(1.3rem, 4vw, 2rem);
    }

    &::-webkit-search-cancel-button {
      display: none;
    }
  }

  button {
    background-color: ${props => props.theme.dark20};
    padding-right: 1rem;
    cursor: pointer;
  }

  svg {
    display: block;

    @media screen and (max-width: 482px) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  
  svg:hover path {
  fill: ${props => props.theme.brandColor};
}
`

export const ContainerPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(3.2rem, 6vw, 5.2rem);
  margin: 6rem 0;

  a {
    height: 25rem;
    position: relative;
    color: ${props => props.theme.dark40};

    @media screen and (min-width: 320px) {
      width: 100%
    }

    @media screen and (min-width: 582px) {
      width: 46.6%
    }

    @media screen and (min-width: 1024px) {
      width: 29.5%
    }

    ${LinearGradient}

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export const Genero = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.2rem;
  background-color: ${props => props.theme.brandColor};
  width: 70px;
  text-align: center;
  padding: .5rem 0;
  margin-top: 1.6rem;
  margin-left: 1.6rem;
  border-radius: 3px;
`

export const Titulo = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 1.3rem;
  line-height: 20px;
  font-weight: 400;
  width: 90%;
  margin-left: 1.6rem;
  margin-bottom: 1.6rem;
`

export const Error = styled.small`
  color: ${props => props.theme.error};
  font-size: 1.6rem;
`