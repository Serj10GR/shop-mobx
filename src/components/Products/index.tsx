import {useEffect} from 'react'
import { ProductsWrapper} from './styled'
import Product from './Product'
import { store } from '../../stores/rootStore'
import { values } from 'mobx'
import { observer } from 'mobx-react-lite'

const Products = () => {

  useEffect(() => {
    store.setProducts()
  }, [])

  return (
    <ProductsWrapper>
      {values(store.products)
        .map(product => 
        <Product 
          name={product.name!}
          id={product.id!}
          price={product.price!}
          description={product.description?.slice(3, -4)!}
          img={product.img!} 
        />)}
    </ProductsWrapper>
  )
}

export default observer(Products)
