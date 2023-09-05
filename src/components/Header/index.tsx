import { MapPin } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/Logo.svg'
import { Cart } from '../Cart'
import { HeaderContainer, LogoContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={logoCoffeeDelivery} alt="Logomarca CoffeeDelivery" />
      </LogoContainer>
      <div className="localization-and-cart">
        <div className="localization">
          <MapPin size={24} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <Cart />
      </div>
    </HeaderContainer>
  )
}
