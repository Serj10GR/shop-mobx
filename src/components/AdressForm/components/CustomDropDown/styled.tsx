import styled from 'styled-components'

export const DropDownWrapper = styled.div`
   width: 100%;
   margin: 20px 0 35px;
   display: flex;
   flex-direction: column;
`
export const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #DC4763;
  margin-bottom: 7px;
`
export const Select = styled.select`
  color: #1B2968;
  padding: 12px;
  width: 250px;
  border: none;
  font-size: 1rem;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
  background-color: #FDEDE3;
  
`

export const Option = styled.option`
  padding: 30px;
`