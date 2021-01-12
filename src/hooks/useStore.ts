import { CartStore } from '../stores/cartStore'
import { RootStore } from '../stores/rootStore'
import { UserModel } from '../stores/userStore'

const store = {
  rootStore: RootStore.create({products: []}),
  cart: CartStore.create({}),
  user: UserModel.create({})
}

export const useStore = () => store