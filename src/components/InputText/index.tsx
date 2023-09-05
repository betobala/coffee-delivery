/* eslint-disable react/display-name */
import React from 'react'
import { Container, InputTextContainer } from './styles'

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  error?: string
}

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ isOptional = false, error, ...rest }: InputTextProps, ref) => {
    return (
      <Container>
        <InputTextContainer {...rest}>
          {<input {...rest} ref={ref} />}
          {isOptional && <span>Opcional</span>}
        </InputTextContainer>
        <div className="error-message">{error && <span>{error}</span>}</div>
      </Container>
    )
  },
)
