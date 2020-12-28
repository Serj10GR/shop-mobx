import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { store } from '../../stores/rootStore'
import CustomInput from './components/CustomInput'
import CustomDropDown from './components/CustomDropDown'


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
         <CustomInput
          required
          name='name'
          label='Numele'
          type='text'
          handleChange={(e: any) => store.user.setName(e.target.value)}
          value={store.user.name}
        />
        <CustomInput
          required
          name='tel'
          label='Telefon'
          type='tel'
          //onChange={handleChange}
          //value={shippingData.tel}
        />
        <CustomInput
          name='adress'
          label='Adresa'
          type='text'
          //onChange={handleChange}
          //value={shippingData.adress}
        /> 
        <CustomDropDown  />
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
