import { useContext, useEffect, useState } from 'react'
import { Button } from '../Button'
import { InputNumber } from '../InputNumber'
import { CatalogItemContainer, ItemContainer } from './styles'
import { CartContext, CartItemProps } from '../../contexts/CartContext'
import { CoffeeProps } from '../../utils/CoffeeList'

export interface ItemProps extends CoffeeProps {
  cartQuantity?: number
}

export function ItemCatalog({
  tags,
  name,
  description,
  image,
  price,
  id,
  cartQuantity = 1,
}: ItemProps) {
  const [quantity, setQuantity] = useState(cartQuantity)
  const [cartItem, setCartItem] = useState<CartItemProps>({
    id,
    price,
    quantity,
  })
  const { addNewItemToCart } = useContext(CartContext)

  function setQuantityFunction(value: number) {
    setQuantity(value)
  }

  useEffect(() => {
    setCartItem({
      id,
      price,
      quantity,
    })
  }, [quantity, id, price])

  function handleAddNewItemToCart(cartItem: CartItemProps) {
    addNewItemToCart(cartItem)
    setQuantity(1)
  }

  return (
    <ItemContainer>
      <CatalogItemContainer>
        <img src={`/coffee-images/${image}`} alt={name} />
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} id="tag">
              {tag}
            </span>
          ))}
        </div>
        <h1 id="name">{name}</h1>
        <span id="description">{description}</span>
        <div className="price-section">
          <div className="price">
            <span>R$</span>
            <span id="price">
              {price.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
          <div className="input-and-button">
            <InputNumber
              quantity={quantity}
              setQuantityFunction={setQuantityFunction}
            />
            <Button
              variant="cart-icon"
              onClick={() => handleAddNewItemToCart(cartItem)}
            />
          </div>
        </div>
      </CatalogItemContainer>
    </ItemContainer>
  )
}
