import styled from 'styled-components'

export const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`

export const Form = styled.form`
`
type TButton = {
  isConfirm?: boolean,
  isPrimary?: boolean
}
export const ButtonsContainer = styled.div<TButton>`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.isConfirm ? '40px' : ''};
`

export const Button = styled.button<TButton>`
  padding: 0.5em 1em;
  outline: none;
  border: 0;
  background: ${props => props.isPrimary ? 'linear-gradient(to right, #B7798C, #DC4763)' : '#FDEDE3'};
  border: ${props => props.isPrimary ? '1px solid transparent' : '1px solid #DC4763'};
  font-size: 1rem;
  text-transform: uppercase;
  color: #fff;
  color: ${props => props.isPrimary ? '#fff' : '#DC4763'};
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;

  &:last-of-type {
    margin-left: 40px;
  }

`