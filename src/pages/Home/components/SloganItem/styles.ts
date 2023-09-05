import { styled } from 'styled-components'

export const SloganItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${(props) => props.theme.colors['base-text']};
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
`

interface IconContainerProps {
  defaultValue: string
}

export const IconContainer = styled.div<IconContainerProps>`
  background: ${({ defaultValue }) => defaultValue};
  padding: 0.5rem;
  border-radius: 1000px;

  display: flex;
  align-items: center;
  justify-content: center;
`
