import { Minus, Plus } from 'phosphor-react'
import { InputNumberContainer, MinusButton, PlusButton } from './styles'

interface InputNumberProps {
  quantity?: number
  setQuantityFunction: (value: number) => void
}

export function InputNumber({
  quantity = 0,
  setQuantityFunction,
}: InputNumberProps) {
  const IconColor = '#8047F8'

  function IncrementItem() {
    setQuantityFunction(quantity + 1)
  }

  function DecreaseItem() {
    setQuantityFunction(Math.max(1, quantity - 1))
  }

  return (
    <InputNumberContainer>
      <MinusButton
        onClick={() => {
          DecreaseItem()
        }}
        type="button"
      >
        <Minus size={14} color={IconColor} weight="bold" />
      </MinusButton>
      <span>{quantity}</span>
      <PlusButton
        onClick={() => {
          IncrementItem()
        }}
        type="button"
      >
        <Plus size={14} color={IconColor} weight="bold" />
      </PlusButton>
    </InputNumberContainer>
  )
}
