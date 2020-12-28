import { InputWrapper, Label, Input } from './styled'

type TInput = {
  required?: boolean,
  label: string,
  name: string,
  type: string,
  handleChange?: any,
}

const CustomInput = ({
  required,
  label,
  name,
  type,
  handleChange,
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
      />
    </InputWrapper>
  )
}

export default CustomInput
