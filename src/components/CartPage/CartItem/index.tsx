import { observer } from 'mobx-react-lite'

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


type TCartItem = {
  id?: string,
  name: string,
  quantity: number,
  img: string,
  getPrice: Function
  cartItem: any,
  removeItem: Function
}

const CartItem = ({
  id,
  name,
  quantity,
  img,
  getPrice,
  cartItem,
  removeItem,
  }: TCartItem) => {
  return (
    <CartItemWrapper>
      <img src={img} alt={name} />
      <ItemTitle>{name}</ItemTitle>
      <QuantWrapper>
        <ArrowUp onClick={() => console.log('up')} />
        <NumberSpan>{quantity}</NumberSpan>
        <ArrowDown onClick={() => console.log('down')} />
      </QuantWrapper>
      <PriceWrapper>{getPrice()} MDL</PriceWrapper>
      <CloseButton onClick={() => removeItem(cartItem)}>
        <CloseIcon />
      </CloseButton>
    </CartItemWrapper>
  )
}

export default observer(CartItem)
