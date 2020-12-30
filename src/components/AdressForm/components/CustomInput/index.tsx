import { InputWrapper, Label, Input } from './styled'

type TInput = {
  required?: boolean,
  label: string,
  name: string,
  type: string,
  handleChange?: any,
  value: string,
}

const CustomInput = ({
  required,
  label,
  name,
  type,
  handleChange,
  value,
  }: TInput) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input
        required={required}
        name={name}
        placeholder={label}
        type={type}
        onChange={handleChange}
        value={value}
      />
    </InputWrapper>
  )
}

export default CustomInput
