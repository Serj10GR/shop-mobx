import styled from 'styled-components'
import { MdCheck } from "react-icons/md";

export const Subtitle = styled.h3`
  margin-bottom: 15px;
  margin-top: 10px;
  color: #DC4763;
`
export const TextLine = styled.div`
 width: 50%;
 display: flex;
 margin-bottom: 8px;
`
type TCell = {
  isPrice? : boolean
}
export const Cell = styled.div<TCell>`
 margin-left: 20px;
 font-weight: ${props => props.isPrice ? '400' : '700'};
 width: 50%;
  :first-of-type {
    width: 45%;
  }
`
 
export const Price = styled.div`
 border-top: 1px solid #1B2968;
 padding-top: 1em;
 margin-top: 10px;
 margin-bottom: 25px;
 font-weight: 700;
 color:#1B2968;

 span {
   color: #DC4763;

 }
`
export const DoneIcon = styled(MdCheck)`
  font-size: 4rem;
  color: green;
  font-weight: bold;
  margin: 0.5em 0;
`