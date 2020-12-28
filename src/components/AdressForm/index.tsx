import { Fragment } from 'react'
import { Link } from 'react-router-dom'


import {
  FormTitle,
  Form,
  ButtonsContainer,
  Button
} from './styled'

const AdressForm = () => {
  return (
    <Fragment>
      <FormTitle>Fă comanda <br /> Noi revenim cu apel pentru confirmare </FormTitle>
      <Form>
        {/* <CustomInput
          required
          name='name'
          label='Numele'
          placeholder='Numele'
          type='text'
          onChange={handleChange}
          value={shippingData.name}
        />
        <CustomInput
          required
          name='tel'
          label='Telefon'
          placeholder='Telefon'
          type='tel'
          onChange={handleChange}
          value={shippingData.tel}
        />
        <CustomInput
          // required to put condition depend on city
          name='adress'
          label='Adresa'
          placeholder='Adresa'
          type='text'
          onChange={handleChange}
          value={shippingData.adress}
        />
        <CustomDropDown handleChange={handleChange} value={shippingData.city} /> */}
        <ButtonsContainer>
          <Link to='/cart'>
            <Button>Back</Button>
          </Link>

          <Button type='submit' isPrimary>Next</Button>
        </ButtonsContainer>
      </Form>
    </Fragment>
  )
}

export default AdressForm
