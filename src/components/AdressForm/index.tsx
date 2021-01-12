import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { useStore } from '../../hooks/useStore'

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
  const { user } = useStore()
  return (
    <Fragment>
      <FormTitle>Completeaza datele pentru livrare</FormTitle>
      <Form onSubmit={() => setIsConfirmed(true)}>
         <CustomInput
          required
          name='name'
          label='Numele'
          type='text'
          handleChange={(e: any) => user.setName(e.target.value)}
          value={user.name}
        />
        <CustomInput
          required
          name='tel'
          label='Telefon'
          type='tel'
          handleChange={(e: any) => user.setPhone(e.target.value)}
          value={user.phone}
        />
        <CustomInput
          name='adress'
          label='Adresa'
          type='text'
          handleChange={(e: any) => user.setAdress(e.target.value)}
          value={user.adress}
        /> 
        <CustomDropDown
          handleChange={(e: any) => user.setCity(e.target.value)}
          value={user.city}
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
