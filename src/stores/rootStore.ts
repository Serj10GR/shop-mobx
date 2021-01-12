import { types, Instance, cast } from "mobx-state-tree"
import { Product, TProduct } from "./product"
import { CartStore } from './cartStore'
import { UserModel } from './userStore'
import { Category, TCategory } from './category'
import { commerce } from '../lib/commerce'
import { values } from 'mobx'



export const RootStore = types
  .model({
    products: types.optional(types.array(Product), []),
    cart: types.optional(CartStore, {}),
    user: types.optional(UserModel, {}),
    categories: types.optional(types.array(Category), [])
  })
  //Seters
  .actions(self => ({
    setProducts(products: Array<TProduct>){
      self.products = cast(products)
    },
    setCategories(categories: Array<TCategory>) {
      self.categories = cast(categories)
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
    },
    async fetchCategories() {
      const { data } = await commerce.categories.list()
      const categories = data.map((category: any) => {
        // building object to match product model type
        return {
          id: category.id,
          name: category.name,
        }
      })
      categories.unshift({id: '123', name: 'all'})
      self.setCategories(categories)
    },

  }))
  .views(self=> ({
    getProductsSum(){
      return values(self.products).length
    }
  }))


export interface RootStoreType extends Instance<typeof RootStore> {}











