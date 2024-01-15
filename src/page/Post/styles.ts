import styled from 'styled-components'

export const Titulo = styled.h1`
  color: ${props => props.theme.white};
  font-size: clamp(2.4rem, 5.5vw, 3.6rem);
  font-weight: 400;

  margin-top: 8.9rem;
  margin-bottom: 1.2rem;

  @media screen and (min-width: 1024px) {
    line-height: 5.5rem;
  }

  @media screen and (max-width: 482px) {
    margin-top: 4.8rem;
  }
`
export const Paragrafo = styled.p`
  color: ${props => props.theme.dark30};
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 500;  
`

export const Time = styled.time`
  color: ${props => props.theme.dark30};
  font-size: clamp(1.2rem, 3.5vw, 1.8rem);
  
  @media screen and (min-width: 769px) {
    line-height: 5.5rem;
  }

  @media screen and (max-width: 768px) {
    display: inline-block;
    margin-top: 1.6rem;
  }
`

export const ImgContainer = styled.div`
  position: relative;

  margin-bottom: 4.3rem;

  @media screen and (max-width: 768px) {
    margin-top: 4rem;
  }
  
  span {
    position: absolute;
    top: clamp(.8rem, 1.3vw, 1.4rem);
    left: clamp(.8rem, 1.3vw, 1.5rem);

    border-radius: 3px;

    font-size: clamp(1.2rem, 2vw, 1.8rem);

    width: clamp(7rem, 11vw, 10rem);
    line-height: 3rem;

    text-align: center;

    background-color: ${props => props.theme.brandColor};
    color: ${props => props.theme.white};
  }

  img {
    width: 100%;
    height: clamp(25rem, 40vw, 45rem);
    object-fit: cover;
  }
`

export const Conteudo = styled.p`
  color: ${props => props.theme.dark30};
  font-size: clamp(1.4rem, 4vw, 2.4rem);

  line-height: 140%;

  margin-bottom: 10.1rem;

  @media screen and (min-width: 1024px) {
    line-height: 4rem;
  }
`