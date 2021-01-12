import { values } from 'mobx'
import { observer } from 'mobx-react-lite'

import Product from './Product'
import { useStore } from '../../hooks/useStore'
 
import { ProductsWrapper} from './styled'


const Products = () => {
  const { rootStore, cart } = useStore() 
  return (
    <ProductsWrapper>
      {values(rootStore.products)
        .map(product => 
        <Product
          key={product.id} 
          name={product.name!}
          id={product.id!}
          price={product.price!}
          description={product.description?.slice(3, -4)!}
          img={product.img!}
          addToCart={cart.addToCart}
        />)}
    </ProductsWrapper>
  )
}

export default observer(Products)
