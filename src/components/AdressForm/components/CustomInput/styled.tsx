import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`
export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #DC4763;

`
export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #DC4763;
  outline: 0;
  font-size: 1.3rem;
  color: #1B2968;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  ::placeholder {
    color: lightgray;
  }

  :focus {
  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #11998e,#38ef7d);
  border-image-slice: 1;
  } 
  
`