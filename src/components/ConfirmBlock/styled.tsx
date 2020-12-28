import styled from 'styled-components'

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
`
 
export const Price = styled.div`
 border-top: 1px solid #1B2968;
 margin-top: 10px;
 font-weight: 700;
 color:#1B2968;

 span {
   color: #DC4763;

 }

`