import { useContext, useEffect, useState } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext'
import {
  ConfirmedOrderContainer,
  IconContainer,
  SloganItemContainer,
} from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import DeliveryImage from '../../assets/DeliveryImage.svg'
import { useTheme } from 'styled-components'

export function ConfirmedOrder() {
  const { order } = useContext(OrdersContext)
  const [paymentOption, setPaymentOption] = useState('')

  const { colors } = useTheme()

  useEffect(() => {
    if (order.paymentMethod === 'credit') {
      setPaymentOption('Cartão de Crédito')
    }
    if (order.paymentMethod === 'debit') {
      setPaymentOption('Cartão de Débito')
    }
    if (order.paymentMethod === 'money') {
      setPaymentOption('Dinheiro')
    }
  }, [order])

  return (
    <ConfirmedOrderContainer>
      <div className="details-section">
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>

        <div className="order-details">
          <SloganItemContainer>
            <IconContainer defaultValue={colors.purple}>
              <MapPin size={16} weight="fill" color="white" />
            </IconContainer>
            <div className="text">
              <div className="street">
                <span>{`Entrega em `}</span>
                <span id="bold">{`${order.addressInfo.street}, ${order.addressInfo.number}`}</span>
              </div>
              <span>{`${order.addressInfo.city} - ${order.addressInfo.neighborhood}, ${order.addressInfo.state}`}</span>
            </div>
          </SloganItemContainer>

          <SloganItemContainer>
            <IconContainer defaultValue={colors.yellow}>
              <Timer size={16} weight="fill" color="white" />
            </IconContainer>
            <div className="text">
              <span>Previsão de entrega</span>
              <span id="bold">20 min - 30 min</span>
            </div>
          </SloganItemContainer>

          <SloganItemContainer>
            <IconContainer defaultValue={colors['yellow-dark']}>
              <CurrencyDollar size={16} color="white" />
            </IconContainer>
            <div className="text">
              <span>Pagamento na entrega</span>
              <span id="bold">{paymentOption}</span>
            </div>
          </SloganItemContainer>
        </div>
      </div>

      <img src={DeliveryImage} alt="" />
    </ConfirmedOrderContainer>
  )
}
