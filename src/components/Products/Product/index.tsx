import { observer } from 'mobx-react-lite'
import {ProductType} from '../../../stores/product'
import {
  ProductWrapper,
  ProductHeader,
  Description,
  ImgWrapper,
  Price,
  Title,
  AddBtn
} from './styled'


const Product = ({
  id,
  price,
  description,
  img,
  name,
}: ProductType) => {

  console.log(name)
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
     <AddBtn>Add to Cart</AddBtn>
   </ProductWrapper>
  )
}

export default observer(Product)
