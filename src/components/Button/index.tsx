import { useContext } from 'react'
import {
  ButtonContainer,
  CartIconButtonVariant,
  DefaultButtonVariant,
  RemoveButtonVariant,
} from './styles'
import { ShoppingCartSimple, Trash } from 'phosphor-react'
import { CartContext } from '../../contexts/CartContext'

export type ButtonVariants = 'default' | 'remove' | 'cart-icon'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants
  title?: string
  itemId?: number
}

export function Button({
  variant = 'default',
  title,
  itemId = 0,
  ...rest
}: ButtonProps) {
  const iconColor = '#8047F8'

  const { removeCartItem } = useContext(CartContext)

  function handleRemoveCartItem(id: number) {
    const removeVerification = confirm(
      'Tem certeza que deseja remover o item do carrinho?',
    )
    if (removeVerification) {
      removeCartItem(id)
    }
  }

  return (
    <ButtonContainer>
      {variant === 'default' && (
        <>
          <DefaultButtonVariant {...rest}>{title}</DefaultButtonVariant>
        </>
      )}
      {variant === 'remove' && (
        <>
          <RemoveButtonVariant
            onClick={() => handleRemoveCartItem(itemId)}
            {...rest}
            type="button"
          >
            <Trash size={16} color={iconColor} />
            Remover
          </RemoveButtonVariant>
        </>
      )}
      {variant === 'cart-icon' && (
        <>
          <CartIconButtonVariant type="button" {...rest}>
            <ShoppingCartSimple size={22} weight="fill" color="white" />
          </CartIconButtonVariant>
        </>
      )}
    </ButtonContainer>
  )
}
