import { observer } from 'mobx-react-lite'
import { TCartItem } from '../../../stores/cartStore'

import {
  CartItemWrapper,
  ItemTitle,
  QuantWrapper,
  ArrowDown,
  ArrowUp,
  NumberSpan,
  PriceWrapper,
  CloseButton,
  CloseIcon
} from './styled'


type CartItemTypes = {
  name: string,
  quantity: number,
  img: string,
  getPrice: Function
  cartItem: TCartItem,
  removeItem: Function,
  increaseQuant: Function,
  decreaseQuant: Function,
}

const CartItem = ({
  name,
  quantity,
  img,
  getPrice,
  cartItem,
  removeItem,
  increaseQuant,
  decreaseQuant
  }: CartItemTypes) => {
    if(quantity < 1) removeItem(cartItem)

  return (
    <CartItemWrapper>
      <img src={img} alt={name} />
      <ItemTitle>{name}</ItemTitle>
      <QuantWrapper>
        <ArrowDown onClick={() => decreaseQuant(1)} />
        <NumberSpan>{quantity}</NumberSpan>
        <ArrowUp onClick={() => increaseQuant(1)} />
      </QuantWrapper>
      <PriceWrapper>{getPrice()} MDL</PriceWrapper>
      <CloseButton onClick={() => removeItem(cartItem)}>
        <CloseIcon />
      </CloseButton>
    </CartItemWrapper>
  )
}

export default observer(CartItem)
