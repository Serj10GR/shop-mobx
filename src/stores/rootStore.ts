import { types, Instance } from "mobx-state-tree"
import { Product } from "./product"
import { CartStore } from './cartStore'
import { UserModel } from './userStore'
import { commerce } from '../lib/commerce'
import { values } from 'mobx'

export const RootStore = types
  .model({
    products: types.optional(types.array(Product), []),
    cart: types.optional(CartStore, {}),
    user: types.optional(UserModel, {})
  })
  //Seters
  .actions(self => ({
    setProducts(products: any){
      self.products = products
    }

  }))

  //Async calls
  .actions((self) => ({
    async fetchProds() {
      const { data } = await commerce.products.list()
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
      self.setProducts(initProducts)
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











