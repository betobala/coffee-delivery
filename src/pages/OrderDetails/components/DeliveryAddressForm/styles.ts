import { styled } from 'styled-components'
import { InputTextContainer } from '../../../../components/InputText/styles'

export const FormContainer = styled.div`
  display: grid;
  grid-template-areas:
    'cep cep cep cep'
    'street street street street'
    'number complement complement complement'
    'neighborhood city city state';
  column-gap: 0.75rem;
  row-gap: 1rem;
`
export const CEP = styled.div`
  span {
    color: red;
    font-size: 0.75rem;
  }
`

export const CEPInput = styled(InputTextContainer)`
  grid-area: cep;
  width: 12.5rem;
`
export const StreetInput = styled.div`
  grid-area: street;
`
export const NumberInput = styled.div`
  grid-area: number;
`
export const ComplementInput = styled.div`
  grid-area: complement;
`
export const NeighborhoodInput = styled.div`
  grid-area: neighborhood;
`
export const CityInput = styled.div`
  grid-area: city;
`
export const StateInput = styled.div`
  grid-area: state;
`
