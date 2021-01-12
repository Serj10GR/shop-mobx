import styled from 'styled-components/macro'

import { IoIosArrowDown, IoIosArrowUp, IoIosClose } from "react-icons/io";

export const CloseButton = styled.button`
  position: absolute;
  top: -3px;
  right: -3px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: none;
  background: #fff;
  box-shadow: 0 10px 6px -6px #F4C6AE;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity .25s ease-in-out;
  cursor: pointer;
  outline: none;
`
export const CloseIcon = styled(IoIosClose)`
  color: #DC4763;
  font-size: 1.2rem;
`


export const CartItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 10px 6px -6px #F4C6AE;

  img {
    height: 72px;
    width: 72px;
    margin-right: 17px;
  }

  :hover {
    ${CloseButton} {
      opacity: 1;
    }

  }
`

export const ItemTitle = styled.h3`
  flex: 2;
  align-self: center;
  color: #DC4763;
`

export const QuantWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`
export const PriceWrapper = styled.div`
 align-self: flex-end;
`
export const ArrowDown = styled(IoIosArrowDown)`
 font-size: 1.8rem;
 color: #dce1f9;
 cursor: pointer;
`
export const ArrowUp = styled(IoIosArrowUp)`
  font-size: 1.8rem;
  color: #dce1f9;
  cursor: pointer;
`
export const NumberSpan = styled.span`
 margin: 0 5px;
 font-size: 1.25rem;
`