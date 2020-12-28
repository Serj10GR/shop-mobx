import { Fragment } from 'react'
import { store } from '../../stores/rootStore'


import { Button, ButtonsContainer } from '../AdressForm/styled'
import { TextLine, Cell, Subtitle, Price } from './styled'

type TConfirm = {
  setIsConfirmed: Function
}
const ConfirmBlock = ({setIsConfirmed}: TConfirm) => {
  return (
    <Fragment>
      <Subtitle>Comanda: </Subtitle>
      {store.cart.cartItems.map(item => {
        return <TextLine>
          <Cell>{item.product.name}</Cell>
          <Cell isPrice>{item.product.price}</Cell>
        </TextLine>
      })}
      <Price>Total: <span>{store.cart.getTotalSum()}</span></Price>

      <Subtitle>Livrare: </Subtitle>
      <TextLine>
        <Cell>Nume:</Cell>
        <Cell>{store.user.name}</Cell>
      </TextLine>
      <TextLine>
        <Cell>Telefon:</Cell>
        <Cell>{store.user.phone}</Cell>
      </TextLine>
      <TextLine>
        <Cell>Adresa:</Cell>
        <Cell>{store.user.adress}</Cell>
      </TextLine>
      <TextLine>
        <Cell>Localitate:</Cell>
        <Cell>{store.user.city}</Cell>
      </TextLine>

      <ButtonsContainer isConfirm>
        <Button onClick={() => setIsConfirmed(false)}>Back</Button>
        <Button isPrimary>Confirm</Button>
      </ButtonsContainer>

    </Fragment>
  )
}

export default ConfirmBlock