import { types, flow } from "mobx-state-tree"
import { Product } from "./product"
import { commerce } from '../lib/commerce'
import {values} from 'mobx'

export const RootStore = types
  .model({
    products: types.optional(types.array(Product), [])
  })
  .actions((self) => ({
    setProducts() {
      const fetchProds = flow(function*() {
        const { data } = yield commerce.products.list()
        const initProducts = data.map((prod: any) => {
          return {
            id: prod.id,
            name: prod.name,
            img: prod.media.source,
            description: prod.description,
            price: prod.price.raw
          }
        })
        self.products = initProducts
      })
      fetchProds()
    }

  }))
  .views(self=> ({
    getProductsSum(){
      return values(self.products).length
    }
  }))

export const store = RootStore.create({
  products: []
})











