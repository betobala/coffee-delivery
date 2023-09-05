import { IconContainer, SloganItemContainer } from './styles'
import { ReactNode } from 'react'

interface SloganItemProps {
  text: string
  icon: ReactNode
  iconBgColor: string
}

export function SloganItem({ text, icon, iconBgColor }: SloganItemProps) {
  return (
    <SloganItemContainer>
      <IconContainer defaultValue={iconBgColor}>{icon}</IconContainer>
      <span>{text}</span>
    </SloganItemContainer>
  )
}
