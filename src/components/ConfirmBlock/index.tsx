import { Fragment } from 'react'
import { TextLine, Cell, Subtitle, Price } from './styled'

const ConfirmBlock = () => {
  return (
    <Fragment>
      <Subtitle>Comanda: </Subtitle>
      {/* {cart.line_items.map(item => {
        return <TextLine>
          {item.name}
          <Cell isPrice>{item.price.formatted_with_code}</Cell>
        </TextLine>
      })} */}
      <Price>Total: <span></span></Price>

      <Subtitle>Livrare: </Subtitle>
      <TextLine>
        Nume: <Cell></Cell>
      </TextLine>
      <TextLine>
        Telefon: <Cell></Cell>
      </TextLine>
      <TextLine>
        Adresa: <Cell></Cell>
      </TextLine>
      <TextLine>
        Localitate: <Cell></Cell>
      </TextLine>

      {/* <ButtonsContainer isConfirm>
        <Button onClick={handleBackStep}>Back</Button>
        <Button isPrimary onClick={submitOrder}>Confirm</Button>
      </ButtonsContainer> */}

    </Fragment>
  )
}

export default ConfirmBlock