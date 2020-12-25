import {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
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
                {store.cart.cartItems
                  .map((item, i) => 
                    <CartItem 
                      key={i}
                      name={item.product.name!}
                      id={item.product.id!}
                      img={item.product.img!}
                      getPrice={item.getPrice}
                      quantity={item.quantity!}
                      cartItem={item}
                      removeItem={store.cart.removeCartItem}
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
