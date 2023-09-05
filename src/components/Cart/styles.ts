import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const CartContainer = styled.div`
  border: none;
  background: transparent;

  span {
    position: relative;

    top: -44px;
    right: -22px;

    font-family: Roboto;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.72px;
    padding: 2px 6px;

    background: ${(props) => props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors.white};
    border-radius: 9999px;
    cursor: pointer;
  }
`
export const IconContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${(props) => props.theme.colors['yellow-light']};

  padding: 0.5rem;
  border-radius: 6px;
`
