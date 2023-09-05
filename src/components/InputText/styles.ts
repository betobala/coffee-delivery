import { styled } from 'styled-components'
export const Container = styled.div`
  .error-message {
    color: red;
    font-size: 0.75rem;
  }
`

export const InputTextContainer = styled.div`
  display: flex;
  padding: 0.75rem;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  background: ${(props) => props.theme.colors['base-input']};

  font-family: Roboto;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
  font-weight: 400;
  font-style: normal;

  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors['yellow-dark']};
  }

  > input {
    width: 100%;
    text-align: left;
    background: transparent;
    border: 0;

    color: ${(props) => props.theme.colors['base-text']};

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};

      font-family: Roboto;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;
    }
    &:focus {
      outline: 0;
    }
  }

  span {
    color: ${(props) => props.theme.colors['base-label']};
    font-style: italic;
    font-size: 0.75rem;
  }
`
