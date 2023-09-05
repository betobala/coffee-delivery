import { styled } from 'styled-components'

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 4px;
  width: 4.5rem;
  height: 2rem;
  padding: 0.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-button']};

  span {
    color: ${(props) => props.theme.colors['base-title']};
    text-align: center;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }
`

const BaseButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`
export const MinusButton = styled(BaseButton)``
export const PlusButton = styled(BaseButton)``
