import { observer } from 'mobx-react-lite'
import { ChangeEvent } from 'react'
import { DropDownWrapper, Select, Option, Label } from './styled'

type TDropDown  = {
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void
  value: string
}
const CustomDropDown = ({handleChange, value} : TDropDown) => {
  return (
    <DropDownWrapper>
      <Label>Localitate</Label>
      <Select
        onChange={handleChange}
        name='city'
        value={value}
      >
        <Option value=''>Select City</Option>
        <Option value='Cimișlia'>Cimișlia</Option>
        <Option value="Ecaterinovca">Ecaterinovca</Option>
        <Option value='Dimitrovca'>Dimitrovca</Option>
        <Option value='Valea Perjei'>Valea Perjei</Option>
        <Option value="Ciucur Mingir">Ciucur Mingir</Option>
      </Select>
    </DropDownWrapper>
  )
}

export default observer(CustomDropDown)