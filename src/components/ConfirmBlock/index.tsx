import { Fragment, useState } from 'react'
import emailjs from 'emailjs-com';
import { observer } from 'mobx-react-lite'


import { store } from '../../stores/rootStore'

import { Button, ButtonsContainer } from '../AdressForm/styled'
import { 
  TextLine,
  Cell,
  Subtitle,
  Price,
  DoneIcon
 } from './styled'

type TConfirm = {
  setIsConfirmed: Function
}
const ConfirmBlock = ({setIsConfirmed}: TConfirm) => {
  const [isSended, setIsSended] = useState(false)

  const emailProps = {
    name: store.user.name,
    mob: store.user.phone,
    items:store.cart.cartItems.map((item, ) => `${item.product.name} - ${item.quantity} `).join('/-/'),
    total: store.cart.getTotalSum(),
    loc: store.user.city,
    address: store.user.adress
  }

  const sendDataByMail = () => {
    //@ts-ignore
    emailjs.send('service_4mec50a', 'template_8wmytn8', emailProps, 'user_71CZsYlbqz7Hp3eSXUJKb')
    .then(function (response) {
     console.log('SUCCESS!', response.status, response.text);
     setIsSended(true)
     }, function (error) {
     console.log('FAILED...', error);
    });
  }

  return (
    <Fragment>
      {
        !isSended
        ? <Fragment>
            <Subtitle>Comanda: </Subtitle>
            {store.cart.cartItems.map(item => {
              return <TextLine>
                <Cell>{item.product.name}</Cell>
                <Cell isPrice>{item.product.price}</Cell>
              </TextLine>
            })}
            <Price>Total: <span>{store.cart.getTotalSum()} MDL</span></Price>

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
              <Button isPrimary onClick={sendDataByMail}>
                Confirm
              </Button>
            </ButtonsContainer>
          </Fragment>
        : <Fragment>
          <h2>Comanda a fost trimisa cu succes!</h2>
          <DoneIcon />
          <h4>In scurt timp revenim cu un apel pentru confirmare</h4>
        </Fragment>
      }
      

    </Fragment>
  )
}

export default observer(ConfirmBlock)