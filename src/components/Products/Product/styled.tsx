import styled from 'styled-components'


export const Description = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  font-weight: 400;
  transition: all ease 500ms;
`

export const ProductWrapper = styled.div`
  width: 310px;
  height: 370px;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #3C444E;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(154,160,185,.05), 
  0 15px 40px rgba(166,173,201,.2);
  transition: all ease 500ms;

  :hover {
    background-color: rgba(0,0,0,.2);
    color: #F2F2F2;
    
    ${Description} {
      color: #222;
    }
  }

   @media (max-width: 520px) {
    width: 100%;
  }
`
export const ProductHeader = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const ImgWrapper = styled.div`
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #5555;
    object-fit: contain;

  }
`
export const Price = styled.h4`
 font-size: 1.3rem;
 position: absolute;
 top: 15px;
 right: 15px;

 span {
   font-size: 1rem;
 }
`
export const Title = styled.h3`
  font-size: 1.2rem;
`


export const AddBtn = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 15px;
  border-radius: 30px;
  border: 1px solid #F5A623;
  transition: all ease 500ms;
  font-weight: 700;
  cursor: pointer;
  outline: none;

  :hover {
    color: #fff;
    background-color: #F5A623;
    zoom: 1.1;
  }
`