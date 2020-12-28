import { DropDownWrapper, Select, Option, Label } from './styled'

type TDropDown  = {
  handleChange: any
}
const CustomDropDown = ({handleChange} : TDropDown) => {
  return (
    <DropDownWrapper>
      <Label>Localitate</Label>
      <Select
        onChange={handleChange}
        name='city'
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

export default CustomDropDown