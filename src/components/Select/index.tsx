import { SelectContainer } from './styles'
import { Bank, CreditCard, Money } from 'phosphor-react'

export type SelectVariants = 'credit' | 'debit' | 'money'

interface SelectProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: SelectVariants
  isChecked?: boolean
}

export function Select({ variant, isChecked = false, ...rest }: SelectProps) {
  const iconColor = '#8047F8'

  return (
    <SelectContainer type="button" $ischecked={isChecked} {...rest}>
      {variant === 'credit' && (
        <div>
          <CreditCard size={16} color={iconColor} />
          <span>Cartão de crédito</span>
        </div>
      )}
      {variant === 'debit' && (
        <div>
          <Bank size={16} color={iconColor} />
          <span>Cartão de débito</span>
        </div>
      )}
      {variant === 'money' && (
        <div>
          <Money size={16} color={iconColor} />
          <span>Dinheiro</span>
        </div>
      )}
    </SelectContainer>
  )
}
