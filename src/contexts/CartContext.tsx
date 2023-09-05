import { produce } from 'immer'
import { ReactNode, createContext, useEffect, useState } from 'react'

export interface CartItemProps {
  id: number
  price: number
  quantity: number
}

interface CartContextType {
  cartItems: CartItemProps[]
  itemQuantityInCart: number
  addNewItemToCart: (data: CartItemProps) => void
  updateCartItemQuantity: (quantity: number, id: number) => void
  removeCartItem: (id: number) => void
  resetCartItems: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>(() => {
    const storedCartItemsAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-items- 1.0.0',
    )

    if (storedCartItemsAsJSON) {
      return JSON.parse(storedCartItemsAsJSON)
    } else {
      return []
    }
  })
  const [itemQuantityInCart, setItemQuantityInCart] = useState(0)

  function addNewItemToCart(data: CartItemProps) {
    const newItem = data
    const alreadyExistItem = cartItems.findIndex((item) => {
      return item.id === newItem.id
    })

    const newCart = produce(cartItems, (draft) => {
      if (alreadyExistItem < 0) {
        draft.push(newItem)
        alert('Item adicionado ao carrinho!')
      } else {
        draft[alreadyExistItem].quantity += newItem.quantity
        alert('Item atualizado com sucesso!')
      }
    })

    setCartItems(newCart)
  }

  function updateCartItemQuantity(quantity: number, id: number) {
    const itemIndex = cartItems.findIndex((item) => {
      return item.id === id
    })
    const newCart = produce(cartItems, (draft) => {
      if (itemIndex >= 0) {
        draft[itemIndex].quantity = quantity
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(id: number) {
    const itemIndex = cartItems.findIndex((item) => {
      return item.id === id
    })
    const newCart = produce(cartItems, (draft) => {
      if (itemIndex >= 0) {
        draft.splice(itemIndex, 1)
      }
    })
    setTimeout(() => setCartItems(newCart), 300)
  }
  function resetCartItems() {
    setCartItems([])
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)

    localStorage.setItem('@coffee-delivery:cart-items- 1.0.0', stateJSON)

    setItemQuantityInCart(cartItems.length)
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemQuantityInCart,
        addNewItemToCart,
        updateCartItemQuantity,
        removeCartItem,
        resetCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
