import { observer } from 'mobx-react-lite'

import {
  ProductWrapper,
  ProductHeader,
  Description,
  ImgWrapper,
  Price,
  Title,
  AddBtn
} from './styled'

type TProduct = {
  id: string,
  price: number,
  description: string,
  img: string,
  name: string,
  addToCart?: any,
}


const Product = ({
  id,
  price,
  description,
  img,
  name,
  addToCart,
}: TProduct) => {

  return (
   <ProductWrapper>
     <ProductHeader>
       <ImgWrapper>
         <img src={img} alt={name}/>
       </ImgWrapper>
       <Price>{price}<span>MDL</span></Price>
     </ProductHeader>
     <Title>{name}</Title>
     <Description>{description}</Description>
     <AddBtn onClick={() => addToCart({id, name, price, img}) } >Add to Cart</AddBtn>
   </ProductWrapper>
  )
}

export default observer(Product)
