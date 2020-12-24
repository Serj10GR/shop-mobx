import { types, Instance } from 'mobx-state-tree'

import { Product, ProductType } from './product'



export const CartItem = types
  .model({
      product: Product,
      quantity: 0,
  })
  .views(self => ({
    getPrice(){
      return self.product.price * self.quantity
    }
  }))
  .actions((self) => ({
    increaseQuantity(number: number) {
      self.quantity += number
    },
    setQuantity(number: number) {
      self.quantity = number
    }
  }))

export type TCartItem = Instance<typeof CartItem>




export const CartStore = types
  .model({
    cartItems: types.optional(types.array(CartItem), []),
    totalItems: types.optional(types.number, 0)
  })
  .actions(self=> ({
    addToCart(product: ProductType, quantity = 1) {
      let entry = self.cartItems.find((item) => item.product.id === product.id)
      console.log(entry)
      if (!entry) {
        self.cartItems.push({ product: product })
        entry = self.cartItems[self.cartItems.length - 1]
      }
      entry.increaseQuantity(quantity)
    },
    
  }))
  .views(self => ({
    getNumberOfItems() {
      return self.cartItems.length
    }
  }))
  
export const cartStore = CartStore.create({})