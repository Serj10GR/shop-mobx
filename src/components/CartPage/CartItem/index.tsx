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
  price: number
}

const CartItem = ({
  id,
  name,
  quantity,
  img,
  price
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
      <PriceWrapper>{price * quantity} MDL</PriceWrapper>
      <CloseButton onClick={() => console.log('remove')}>
        <CloseIcon />
      </CloseButton>
    </CartItemWrapper>
  )
}

export default CartItem
