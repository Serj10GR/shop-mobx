
import { types, Instance } from 'mobx-state-tree'
import { commerce }  from '../lib/commerce'

export const CartItem = types
   .model({
      id: types.optional(types.identifier, ''),
      name: types.optional(types.string, ""),
      description: types.optional(types.string, ""),
      price: types.optional(types.number, 0),
      img: types.optional(types.string, ""),
      quantity: types.optional(types.number, 1)
 })
export type TCartItem = Instance<typeof CartItem>

export const CartStore = types
  .model({
    cartItems: types.optional(types.array(CartItem), []),
    total: types.optional(types.number, 0),
    totalItems: types.optional(types.number, 0)
  })

  // Setters
  .actions(self =>({
    setCart(cartItems: any, total: number, totalItems: number){
     self.cartItems = cartItems
     self.total = total
     self.totalItems = totalItems
    }
  }))

  // async actions
  .actions(self=> ({
    async getCartData() {
      const res = await commerce.cart.retrieve()
      const cartItems = res.line_items.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price.raw,
          img: item.media.source,
          quantity: item.quantity
        }
      })
      self.setCart(cartItems, res.total, res.total_items)
      },

    async addToCart(productID: number | string, quantity: number){
      console.log('button was clicked')
      const res = await commerce.cart.add(productID, quantity)
      const cartItems = res.cart.line_items.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price.raw,
          img: item.media.source,
          quantity: item.quantity
        }
      })
      self.setCart(cartItems, res.cart.total, res.cart.total_items)
    }
  }))
  
export const cartStore = CartStore.create({})