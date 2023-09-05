import { ShoppingCart } from 'phosphor-react'
import { CartContainer, IconContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Cart() {
  const { itemQuantityInCart } = useContext(CartContext)

  return (
    <CartContainer>
      <IconContainer to="/order">
        <ShoppingCart size={22} weight="fill" color="#C47F17" />
      </IconContainer>
      <span>{itemQuantityInCart}</span>
    </CartContainer>
  )
}
