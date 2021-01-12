import { types, Instance, destroy } from 'mobx-state-tree'
import { Product, ProductType } from './product'


export const CartItem = types
  .model({
      product: Product,
      quantity: 0,
  })
  .actions((self) => ({
    increaseQuantity(number: number) {
      self.quantity += number
    },
    decreaseQuantity(number: number){
      self.quantity -= number

    },
    setQuantity(number: number) {
      self.quantity = number
    },
    //move to views
    getPrice() {
      return self.product.price * self.quantity
    }
  }))

export type TCartItem = Instance<typeof CartItem>




export const CartStore = types
  .model("CartStore", {
    cartItems: types.optional(types.array(CartItem), []),
  })
  .actions(self=> ({
    addToCart(product: ProductType, quantity = 1) {
      let entry = self.cartItems.find((item) => item.product.id === product.id)
      if (!entry) {
        self.cartItems.push({ product: product })
        entry = self.cartItems[self.cartItems.length - 1]
      }
      entry.increaseQuantity(quantity)
    },
    removeCartItem(item: TCartItem){
      destroy(item)
    } 
  }))
  .views(self => ({
    getNumberOfItems() {
      return self.cartItems.reduce((sum, item) => sum + item.quantity, 0)
    },
    getTotalSum(){
      return self.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0 )
    }
  }))
  
export const cartStore = CartStore.create({})