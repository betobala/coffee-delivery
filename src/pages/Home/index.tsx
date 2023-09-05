import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { SloganItem } from './components/SloganItem'
import {
  HomeContainer,
  Products,
  ProductsSection,
  SloganSection,
} from './styles'
import bigLogo from '../../assets/BigLogo.svg'
import { ItemCatalog } from '../../components/ItemCatalog'
import { coffeeList } from '../../utils/CoffeeList'
import { useTheme } from 'styled-components'

export function Home() {
  const { colors } = useTheme()
  return (
    <HomeContainer>
      <SloganSection>
        <div className="main-text">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </div>
        <div className="items">
          <SloganItem
            icon={<ShoppingCart size={16} weight="fill" color="white" />}
            iconBgColor={colors['yellow-dark']}
            text="Compra simples e segura"
          />
          <SloganItem
            icon={<Package size={16} weight="fill" color="white" />}
            iconBgColor={colors['base-text']}
            text="Embalagem mantém o café intacto"
          />
          <SloganItem
            icon={<Timer size={16} weight="fill" color="white" />}
            iconBgColor={colors.yellow}
            text="Entrega rápida e rastreada"
          />
          <SloganItem
            icon={<Coffee size={16} weight="fill" color="white" />}
            iconBgColor={colors.purple}
            text="O café chega fresquinho até você"
          />
        </div>
        <img src={bigLogo} alt="Logo CoffeDelivery" />
      </SloganSection>

      <ProductsSection>
        <h1>Nossos cafés</h1>
        <Products>
          {coffeeList.map((coffee) => (
            <ItemCatalog
              key={coffee.id}
              id={coffee.id}
              tags={coffee.tags}
              description={coffee.description}
              name={coffee.name}
              image={coffee.image}
              price={coffee.price}
            />
          ))}
        </Products>
      </ProductsSection>
    </HomeContainer>
  )
}
