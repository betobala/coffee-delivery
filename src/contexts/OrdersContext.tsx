import { ReactNode, createContext, useContext, useState } from 'react'
import { ConfirmOrderFormData, PaymentMethodType } from '../pages/OrderDetails'
import { CartContext, CartItemProps } from './CartContext'

interface OrderProps {
  addressInfo: ConfirmOrderFormData
  products: CartItemProps[]
  paymentMethod: PaymentMethodType
}

interface OrdersContextType {
  confirmNewOrder: (data: OrderProps) => void
  resetCartItems: () => void
  order: OrderProps
}

export const OrdersContext = createContext({} as OrdersContextType)

interface OrdersContextProviderProps {
  children: ReactNode
}

export function OrdersContextProvider({
  children,
}: OrdersContextProviderProps) {
  const [order, setOrder] = useState<OrderProps>({
    addressInfo: {
      cep: '',
      city: '',
      complement: '',
      neighborhood: '',
      number: '',
      state: '',
      street: '',
    },
    products: [],
    paymentMethod: '',
  })
  const { resetCartItems } = useContext(CartContext)

  function confirmNewOrder(data: OrderProps) {
    setOrder(data)
    resetCartItems()
  }

  return (
    <OrdersContext.Provider
      value={{
        confirmNewOrder,
        resetCartItems,
        order,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
