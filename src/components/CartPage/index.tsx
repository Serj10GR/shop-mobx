import {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { useStore } from '../../hooks/useStore'

import CartItem from './CartItem'

import {
  CartContainer,
  CartWrapper,
  CartHeader,
  CartTitle,
  TotalPrice,
  CartContent,
  CartText,
  EmptyCartIcon,
  ActionIcon,
  Button,
} from './styled'

const CartPage = () => {
  const { cart } = useStore()
  const isEmpty = cart.getNumberOfItems() === 0

  return (
    <CartContainer>
      <CartWrapper>
        <CartHeader>
          <CartTitle>My Cart</CartTitle>
          {
            !isEmpty
            && 
            <TotalPrice>{cart.getTotalSum()} MDL</TotalPrice>
          }
        </CartHeader>
        <CartContent isEmptyCart={isEmpty}>
          {
            isEmpty
              ? <Fragment>
                <EmptyCartIcon />
                <CartText>Coșul tău e gol</CartText>
                <CartText>
                  Adaugă ceva gustos
                  <Link to='/'>
                    <ActionIcon />
                  </Link>
                </CartText>
              </Fragment>
              : <Fragment>
                {cart.cartItems
                  .map((item, i) => 
                    <CartItem 
                      key={i}
                      name={item.product.name!}
                      img={item.product.img!}
                      getPrice={item.getPrice}
                      quantity={item.quantity!}
                      cartItem={item}
                      removeItem={cart.removeCartItem}
                      increaseQuant={item.increaseQuantity}
                      decreaseQuant={item.decreaseQuantity}
                    />)}
              </Fragment>
          }
        </CartContent>
        {
          !isEmpty
          && <Link to='/checkout'>
            <Button>Comanda acum</Button>
          </Link>
        }
      </CartWrapper>
    </CartContainer>
  )
}

export default observer(CartPage)
