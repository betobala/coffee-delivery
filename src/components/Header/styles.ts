import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  .localization {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    color: ${(props) => props.theme.colors['purple-dark']};

    font-family: Roboto;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    border-radius: 6px;
    background: ${(props) => props.theme.colors['purple-light']};
    padding: 0.5rem;
  }

  .localization-and-cart {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
    gap: 0.75rem;
  }
`

export const LogoContainer = styled(Link)``
