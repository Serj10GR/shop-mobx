import { useState } from 'react' 
import AdressForm from '../AdressForm'
import ConfirmBlock from '../ConfirmBlock'

import {
  CheckOutContainer,
  CheckOutWrapper,
  Header,
  Title,
  InnerContent,
} from './styled'


const CheckoutPage = () => {
  const [isConfirmed, setCofirmed] = useState(false)

  return (
    <CheckOutContainer>
      <CheckOutWrapper>
        <Header>
          <Title>{!isConfirmed ? "Checkout" : 'Confirmare'}</Title>
        </Header>
        <InnerContent>
          {
            !isConfirmed
            ? <AdressForm setIsConfirmed={setCofirmed} />
            : <ConfirmBlock setIsConfirmed={setCofirmed} />
          }
        </InnerContent>
      </CheckOutWrapper>
    </CheckOutContainer>
  )
}

export default CheckoutPage
