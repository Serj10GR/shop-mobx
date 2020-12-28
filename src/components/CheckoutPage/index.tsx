import AdressForm from '../AdressForm'
import {
  CheckOutContainer,
  CheckOutWrapper,
  Header,
  Title,
  InnerContent,
} from './styled'


const CheckoutPage = () => {
  return (
    <CheckOutContainer>
      <CheckOutWrapper>
        <Header>
           <Title>'Confirmare' : "Checkout"</Title>
        </Header>
        <InnerContent>
          <AdressForm />
          {/* {!shippingData
            ? <AdressForm handleSubmit={handleUserDataSubmit} />
            : <ConfirmBlock
              cart={cart}
              submitOrder={clickHandler}
              {...shippingData}
              handleBackStep={handleBackStep}
            />
          } */}
        </InnerContent>
      </CheckOutWrapper>
    </CheckOutContainer>
  )
}

export default CheckoutPage
