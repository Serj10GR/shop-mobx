import { types, flow, Instance, getSnapshot } from "mobx-state-tree"
import { Product } from "./product"
import { CartStore } from './cartStore'
import { commerce } from '../lib/commerce'
import {values} from 'mobx'

export const RootStore = types
  .model({
    products: types.optional(types.array(Product), []),
    cart: types.optional(CartStore, {})
  })
  .actions((self) => ({
    afterCreate() {
      const fetchProds = flow(function* () {
        const { data } = yield commerce.products.list()
        const initProducts = data.map((prod: any) => {
          // building object to match product model type
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
    },
    addToCart(id: string) {
      const prods = getSnapshot(self.products)
      const item = prods.find(item => item.id === id)
      self.cart.cartItems.push(item!)
      console.log(self.cart.cartItems)
    }
  }))
  .views(self=> ({
    getProductsSum(){
      return values(self.products).length
    }
  }))

export const store = RootStore.create({
  products: [],

})

export type RootStoreType = Instance<typeof RootStore>











