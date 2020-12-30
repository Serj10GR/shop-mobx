import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { store } from '../../stores/rootStore'
import CustomInput from './components/CustomInput'
import CustomDropDown from './components/CustomDropDown'


import {
  FormTitle,
  Form,
  ButtonsContainer,
  Button
} from './styled'

type TAdressForm = {
  setIsConfirmed : Function
}

const AdressForm = ({setIsConfirmed} : TAdressForm) => {
  return (
    <Fragment>
      <FormTitle>Fă comanda <br /> Noi revenim cu apel pentru confirmare </FormTitle>
      <Form onSubmit={() => setIsConfirmed(true)}>
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
          handleChange={(e: any) => store.user.setPhone(e.target.value)}
          value={store.user.phone}
        />
        <CustomInput
          name='adress'
          label='Adresa'
          type='text'
          handleChange={(e: any) => store.user.setAdress(e.target.value)}
          value={store.user.adress}
        /> 
        <CustomDropDown
          handleChange={(e: any) => store.user.setCity(e.target.value)}
          value={store.user.city}
        />
        <ButtonsContainer>
          <Link to='/cart'>
            <Button>Back</Button>
          </Link>
          <Button 
            type='submit' isPrimary>Next</Button>
        </ButtonsContainer>
      </Form>
    </Fragment>
  )
}

export default observer(AdressForm)
