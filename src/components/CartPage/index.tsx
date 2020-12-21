import {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { store } from '../../stores/rootStore'
import { values } from 'mobx'

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
  const isEmpty = values(store.cart.cartItems).length === 0 
 
  return (
    <CartContainer>
      <CartWrapper>
        <CartHeader>
          <CartTitle>My Cart</CartTitle>
          {
            isEmpty
            && 
            <TotalPrice>100</TotalPrice>
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
                {values(store.cart.cartItems)
                  .map(item => 
                    <CartItem 
                      key={item.id}
                      name={item.name!}
                      id={item.id!}
                      price={item.price!}
                      img={item.img!}
                      quantity={item.quantity!}

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

export default CartPage
