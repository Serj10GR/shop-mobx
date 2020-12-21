import { values } from 'mobx'
import { observer } from 'mobx-react-lite'

import Product from './Product'
import { store } from '../../stores/rootStore'

import { ProductsWrapper} from './styled'




const Products = () => {
  store.cart.tryAction()
  return (
    <ProductsWrapper>
      {values(store.products)
        .map(product => 
        <Product
          key={product.id} 
          name={product.name!}
          id={product.id!}
          price={product.price!}
          description={product.description?.slice(3, -4)!}
          img={product.img!}
          addToCart={store.addToCart}
        />)}
    </ProductsWrapper>
  )
}

export default observer(Products)
