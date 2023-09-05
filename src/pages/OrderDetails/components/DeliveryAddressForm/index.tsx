import { IMaskInput } from 'react-imask'
import { InputText } from '../../../../components/InputText'
import {
  CEP,
  CEPInput,
  CityInput,
  ComplementInput,
  FormContainer,
  NeighborhoodInput,
  NumberInput,
  StateInput,
  StreetInput,
} from './styles'
import { Controller, useFormContext } from 'react-hook-form'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function DeliveryaddressForm() {
  const { register, formState, control } = useFormContext()

  const { errors } = formState as ErrorsType

  return (
    <FormContainer>
      <CEP>
        <CEPInput>
          <Controller
            control={control}
            name="cep"
            render={({ field: { onChange, onBlur, value } }) => (
              <IMaskInput
                onChange={onChange} // send value to hook form
                onBlur={onBlur} // notify when input is touched/blur
                selected={value}
                placeholder="CEP"
                mask="00.000-000"
              />
            )}
          />
        </CEPInput>
        <span>{errors.cep?.message}</span>
      </CEP>

      <StreetInput>
        <InputText
          id="street"
          placeholder="Rua"
          {...register('street')}
          error={errors.street?.message}
        />
      </StreetInput>

      <NumberInput>
        <InputText
          id="number"
          placeholder="Número"
          {...register('number')}
          error={errors.number?.message}
        />
      </NumberInput>

      <ComplementInput>
        <InputText
          id="complement"
          placeholder="Complemento"
          isOptional
          {...register('complement')}
          error={errors.complement?.message}
        />
      </ComplementInput>

      <NeighborhoodInput>
        <InputText
          id="neighborhood"
          placeholder="Bairro"
          {...register('neighborhood')}
          error={errors.neighborhood?.message}
        />
      </NeighborhoodInput>

      <CityInput>
        <InputText
          id="city"
          placeholder="Cidade"
          {...register('city')}
          error={errors.city?.message}
        />
      </CityInput>

      <StateInput>
        <InputText
          id="state"
          placeholder="UF"
          {...register('state')}
          error={errors.state?.message}
        />
      </StateInput>
    </FormContainer>
  )
}
