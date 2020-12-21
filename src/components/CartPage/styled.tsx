import styled from 'styled-components'

import { FaCartArrowDown } from 'react-icons/fa'
import { AiFillPlusCircle } from 'react-icons/ai'

export const CartContainer = styled.section`
  max-width: 1270px;
  margin: 0 auto;
  padding-top: 50px;
`
export const CartWrapper = styled.div`
  width: 474px;
  margin: 0 auto;
  color: #1B2968;
`

export const CartHeader = styled.header`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: #fff;
 height: 75px;
 padding: 0 25px;
 border-top-left-radius: 20px;
 border-top-right-radius: 20px;
`
export const CartTitle = styled.h2`
 font-weight: 400;
 letter-spacing: 3px;
`
export const TotalPrice = styled.h3`
 font-weight: 700;
 font-size: 1.5rem;
 
  span {
    font-size: 1.2rem;
    margin-left: 5px;
    color: #DC4763;
  }
`
type CartContentTypes = {
  isEmptyCart: boolean
}
export const CartContent = styled.div<CartContentTypes>`
 width: 100%;
 padding: ${props => props.isEmptyCart ? '50px 25px' : '10px 25px'};
 background-color: #FDEDE3;
 display: flex;
 flex-direction: column;
 align-items: center;
 border-bottom-left-radius: ${props => props.isEmptyCart ? '20px' : ''};
 border-bottom-right-radius: ${props => props.isEmptyCart ? '20px' : ''};
 
`

export const CartText = styled.p`
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: 700;
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;

`
export const EmptyCartIcon = styled(FaCartArrowDown)`
  font-size: 4rem;
  color: red;
`
export const ActionIcon = styled(AiFillPlusCircle)`
  font-size: 2rem;
  color: #DC4763;
  margin-left: 0.4em;
`
export const Button = styled.button`
  width: 100%;
  height: 87px;
  outline: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 0;
  background: linear-gradient(to right, #B7798C, #DC4763);
  font-size: 1.25rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
`

