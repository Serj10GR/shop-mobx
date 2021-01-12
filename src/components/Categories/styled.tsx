import styled from 'styled-components/macro'

export const Wrapper = styled.section`
  padding: 2em 10em;
  display: flex;
  justify-content: center;
  

  @media (max-width: 992px) {
    padding: 2em 3em
  }
`
export const Button = styled.button`
  outline: none;
  padding: 0.5em 1em;
  margin-right: 1em;
  width: 100px;
  height: 40px;
  margin-top: 15px;
  border-radius: 30px;
  border: 1px solid #F5A623;
  transition: all ease 500ms;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #F5A623;

  :hover {
    background-color: transparent;
    color: #333;
    
  }

  &:last-of-type {
    margin-right: 0;
  }

`