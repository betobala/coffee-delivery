import { useContext, useEffect, useState } from 'react'
import { Button } from '../Button'
import { InputNumber } from '../InputNumber'
import { CartItemContainer, ItemContainer } from './styles'
import { CartContext } from '../../contexts/CartContext'
import { CoffeeProps } from '../../utils/CoffeeList'

export interface ItemProps extends CoffeeProps {
  cartQuantity?: number
}

export function ItemCart({
  name,
  image,
  price,
  cartQuantity = 1,
  id,
}: ItemProps) {
  const [quantity, setQuantity] = useState(cartQuantity)
  const { updateCartItemQuantity } = useContext(CartContext)

  function setQuantityFunction(value: number) {
    setQuantity(value)
  }

  useEffect(() => {
    updateCartItemQuantity(quantity, id)
  }, [quantity, id, updateCartItemQuantity])

  const totalPrice = price * quantity

  return (
    <ItemContainer>
      <CartItemContainer>
        <img src={`/coffee-images/${image}`} alt={name} />
        <span id="name">{name}</span>

        <span id="price">
          {`R$ ${totalPrice.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
          })}`}
        </span>
        <div className="input-and-button">
          <InputNumber
            quantity={quantity}
            setQuantityFunction={setQuantityFunction}
          />
          <Button itemId={id} variant="remove" />
        </div>
      </CartItemContainer>
    </ItemContainer>
  )
}
