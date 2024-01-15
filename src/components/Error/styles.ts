import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 2.6rem 0 18.2rem 0;

  @media screen and (max-width: 1024px) {
    margin-bottom: 8rem;
  }

  > span {
    color: ${props => props.theme.brandColor};
    font-size: clamp(2rem, 4.5vw, 2.4rem);
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;

  @media screen and (max-width: 768px) {
    display: none;
  }

  span {
    background: linear-gradient( to bottom, ${props => props.theme.dark30}, ${props => props.theme.dark10});
    -webkit-text-fill-color: transparent; 
    background-clip: text; 
    color: ${props => props.theme.white};
    font-size: 1.6rem;
    font-weight: 500;
  }
`

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  section:nth-child(1) {
    h1 {
      color: ${props => props.theme.dark40};
      font-size: clamp(3.1rem, 9.7vw, 4.8rem);
      font-weight: 400;

      max-width: 45.7rem;

      margin-bottom: 1.7rem;

      @media screen and (max-width: 1024px) {
        max-width: 100%;
      }
    }

    p {
      color: ${props => props.theme.dark30};
      font-size: clamp(1.6rem, 5vw, 2rem);
      line-height: 3.4rem;

      margin-bottom: 4.1rem;

      max-width: 49.5rem;

      @media screen and (max-width: 482px) {
        font-weight: 500;
        line-height: 140%;
      }
    }

    a {
      display: inline-block;

      background-color: ${props => props.theme.brandColor};
      color: ${props => props.theme.dark40};
      font-size: 1.8rem;

      width: 17.4rem;
      line-height: 4.4rem;

      text-align: center;

      border-radius: 5px;
    }
  }

  section:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.42rem;

    @media screen and (max-width: 1024px) {
      margin-top: 12.3rem;
      margin-bottom: 8rem;

      gap: 4.69rem;
    }

    img {
      width: 100%;
      max-width: 39.965rem;
    }

    p {
      color: ${props => props.theme.dark30};
      font-size: clamp(1.6rem, 5vw, 2rem);
      max-width: 29.8rem;
      text-align: center;
      line-height: 3rem;

      margin: 0 1rem;

      @media screen and (max-width: 1024px) {
        font-weight: 500;
        line-height: 140%;
      }
    }
  }
`