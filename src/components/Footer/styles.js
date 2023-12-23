import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  margin-top: 9.5rem;

  @media screen and (max-width: 950px) {
        margin-top: 4rem;
  }


  span {
    color: ${props => props.theme.brandColor};
    font-size: 2.4rem;
  }

  p {
    color: ${props => props.theme.dark30};
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;

    max-width: 50rem;

    margin: 1.5rem 0 4rem 0;
  }
`