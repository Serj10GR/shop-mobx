
import { types } from 'mobx-state-tree'

export const CartItem = types
   .model({
      id: types.optional(types.identifier, ''),
      name: types.optional(types.string, ""),
      description: types.optional(types.string, ""),
      price: types.optional(types.number, 0),
      img: types.optional(types.string, ""),
      quantity: types.optional(types.number, 1)
 })

export const CartStore = types
  .model({
    cartItems: types.optional(types.array(CartItem), [])
  })
  .actions(self =>({
    tryAction(){
     console.log('test')
    }
  }))
  
export const cartStore = CartStore.create({})