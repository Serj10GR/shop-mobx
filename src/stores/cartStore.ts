
import { types, Instance, getRoot } from 'mobx-state-tree'
import { values } from 'mobx'

export const CartItem = types
  .model({
      id: types.optional(types.identifier, ''),
      name: types.optional(types.string, ""),
      description: types.optional(types.string, ""),
      price: types.optional(types.number, 0),
      img: types.optional(types.string, ""),
      quantity: types.optional(types.number, 1)
  })
  .actions(self => ({
    increaseQunat() {
      self.quantity = self.quantity++
    }
  }))
export const cartItemStore = CartItem.create({})
export type TCartItem = Instance<typeof CartItem>

export const CartStore = types
  .model({
    cartItems: types.optional(types.array(CartItem), []),
    totalItems: types.optional(types.number, 0)
  })

  // Setters
  .actions(self=> ({
    setTotalItems(number: number) {
     self.totalItems = number
    }
  }))
  .actions(self=> ({
    addToCart(prodID: string){
      console.log('click add')
     const {products} = getRoot(self)
     const target  = values(products).find((item: any) => item.id === prodID)
     const item = {
       id: target.id,
       name: target.name,
       description: target.description,
       price: target.price,
       img: target.img,
       quantity: 1
     }
      self.cartItems.push(item)
     self.setTotalItems(self.cartItems.length)
    }
  }))
  .views(self => ({
    getNumberOfItems() {
      return self.cartItems.length
    }
  }))
  
export const cartStore = CartStore.create({})