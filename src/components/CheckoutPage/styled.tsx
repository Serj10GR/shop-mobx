import styled from 'styled-components'

export const CheckOutContainer = styled.section`
  max-width: 1270px;
  margin: 0 auto;
  padding-top: 50px;
`
export const CheckOutWrapper = styled.div`
  width: 474px;
  margin: 0 auto;
  color: #1B2968;

  @media (max-width: 560px) {
    width: 100%;
  }
`

export const Header = styled.header`
 width: 100%;
 background-color: #fff;
 height: 75px;
 padding: 0 25px;
 border-top-left-radius: 20px;
 border-top-right-radius: 20px;
`
export const Title = styled.h2`
  font-weight: 400;
  text-align: center;
  line-height: 75px;
`
export const InnerContent = styled.div`
 width: 100%;
 background-color: #FDEDE3;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 50px 25px;
 border-bottom-left-radius: 20px;
 border-bottom-right-radius: 20px;
`
