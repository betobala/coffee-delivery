import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  FinishRequestSection,
  RequestDetailsContainer,
  SelectedProductsSection,
} from './styles'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { DeliveryaddressForm } from './components/DeliveryAddressForm'
import { Select } from '../../components/Select'
import { useState, useContext, useEffect } from 'react'
import { ItemCart } from '../../components/ItemCart'
import { CartContext } from '../../contexts/CartContext'
import { CoffeeProps, coffeeList } from '../../utils/CoffeeList'
import { formatPrice } from '../../utils/formatPrice'
import { Button } from '../../components/Button'
import { OrdersContext } from '../../contexts/OrdersContext'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'

interface CartCoffeeListProps extends CoffeeProps {
  quantity: number
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(10, 'CEP incompleto')
    .max(10, 'CEP deve conter no máximo 8 números'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe o estado'),
})

export type ConfirmOrderFormData = zod.infer<
  typeof confirmOrderFormValidationSchema
>

export type PaymentMethodType = 'credit' | 'debit' | 'money' | ''

export function OrderDetails() {
  const [paymentMethodSelected, setPaymentMethodSelected] =
    useState<PaymentMethodType>('')
  const [cartCoffeeList, setCartCoffeeList] = useState<CartCoffeeListProps[]>(
    [],
  )
  const { cartItems } = useContext(CartContext)
  const { confirmNewOrder } = useContext(OrdersContext)
  const navigate = useNavigate()
  const { colors } = useTheme()

  const deliveryPrice = 3.5
  const sumItemsPrice = cartCoffeeList.reduce((accumulator, object) => {
    return accumulator + object.price * object.quantity
  }, 0)
  const totalPrice = sumItemsPrice + deliveryPrice

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      neighborhood: '',
      number: '',
      state: '',
      street: '',
    },
  })

  const { handleSubmit } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    if (paymentMethodSelected === '') {
      alert('Informe o método de pagamento')
      return
    }
    if (cartCoffeeList.length === 0) {
      alert('Carrinho vazio')
      return
    }
    const newOrder = {
      addressInfo: data,
      products: cartItems,
      paymentMethod: paymentMethodSelected,
    }
    confirmNewOrder(newOrder)
    navigate('/confirmed')
  }

  function handlePaymentMethodChange(method: PaymentMethodType) {
    setPaymentMethodSelected(method)
  }

  useEffect(() => {
    function fetchCartItems() {
      setCartCoffeeList([])
      coffeeList.forEach((coffee) => {
        cartItems.forEach((item) => {
          if (coffee.id === item.id) {
            const newCoffee: CartCoffeeListProps = {
              id: coffee.id,
              tags: coffee.tags,
              name: coffee.name,
              description: coffee.description,
              image: coffee.image,
              price: item.price,
              quantity: item.quantity,
            }
            setCartCoffeeList((prevState) => [...prevState, newCoffee])
          }
        })
      })
    }
    fetchCartItems()
  }, [cartItems])

  return (
    <RequestDetailsContainer>
      <form onSubmit={handleSubmit(handleConfirmOrder)} action="">
        <FinishRequestSection>
          <h1>Complete seu pedido</h1>

          <div className="delivery-address-section">
            <div className="title">
              <div className="delivery-address-title">
                <MapPinLine size={22} color={colors['yellow-dark']} />
                <h2>Endereço de Entrega</h2>
              </div>

              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>

            <FormProvider {...confirmOrderForm}>
              <DeliveryaddressForm />
            </FormProvider>
          </div>

          <div className="payment-method-section">
            <div className="title">
              <div className="payment-method-title">
                <CurrencyDollar size={22} color={colors.purple} />
                <h2>Pagamento</h2>
              </div>

              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>

            <div className="select-section">
              <Select
                variant="credit"
                isChecked={paymentMethodSelected === 'credit'}
                onClick={() => handlePaymentMethodChange('credit')}
              />
              <Select
                variant="debit"
                isChecked={paymentMethodSelected === 'debit'}
                onClick={() => handlePaymentMethodChange('debit')}
              />
              <Select
                variant="money"
                isChecked={paymentMethodSelected === 'money'}
                onClick={() => handlePaymentMethodChange('money')}
              />
            </div>
          </div>
        </FinishRequestSection>

        <SelectedProductsSection>
          <h1>Cafés selecionados</h1>

          <div className="products-and-price">
            <div className="products">
              {cartCoffeeList.map((coffee) => (
                <div key={coffee.id}>
                  <ItemCart
                    key={coffee.id}
                    id={coffee.id}
                    tags={coffee.tags}
                    description={coffee.description}
                    name={coffee.name}
                    image={coffee.image}
                    price={coffee.price}
                    cartQuantity={coffee.quantity}
                  />
                  <div className="line" />
                </div>
              ))}
            </div>

            <div className="price">
              <div className="total-items">
                <span>Total de itens</span>
                <span>{`R$ ${formatPrice(sumItemsPrice)}`}</span>
              </div>
              <div className="delivery-price">
                <span>Entrega</span>
                <span>{`R$ ${formatPrice(deliveryPrice)}`}</span>
              </div>
              <div className="total-price">
                <span>Total</span>
                <span>{`R$ ${formatPrice(totalPrice)}`}</span>
              </div>
            </div>
            <Button variant="default" title="Confirmar pedido" type="submit" />
          </div>
        </SelectedProductsSection>
      </form>
    </RequestDetailsContainer>
  )
}
