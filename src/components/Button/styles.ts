import { styled } from 'styled-components'

export const ButtonContainer = styled.div`
  border: none;
  cursor: pointer;
`

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border: none;
  cursor: pointer;
`

export const DefaultButtonVariant = styled(BaseButton)`
  width: 100%;
  background: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};

  padding: 0.75rem 0.5rem;

  font-family: Roboto;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const RemoveButtonVariant = styled(BaseButton)`
  background: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};

  padding: 0.4rem 0.6rem;

  gap: 0.25rem;

  font-family: Roboto;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }
`
export const CartIconButtonVariant = styled(BaseButton)`
  background: ${(props) => props.theme.colors['purple-dark']};

  padding: 0.5rem;

  &:hover {
    background: ${(props) => props.theme.colors.purple};
  }
`
