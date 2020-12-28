import { types } from 'mobx-state-tree'

export const UserModel = types
.model({
  name: types.optional(types.string, ''),
  phone: types.optional(types.string, ''),
  adress: types.optional(types.string, ''),
  city: types.optional(types.string, '')
})
.actions(self => ({
  setName(newName : string){
    self.name = newName
  },
  setPhone(newPhone: string) {
    self.phone = newPhone
  },
  setAdress(newAdress: string) {
    self.adress =  newAdress
  },
  setCity(newCity: string) {
    self.city = newCity
  },
}))

.actions(self => ({
  reset() {
    self.setName('')
    self.setPhone('')
    self.setAdress('')
    self.setCity('')
  }
}))