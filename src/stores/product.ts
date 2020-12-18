import { types } from "mobx-state-tree"

export const Product = types.model({
  id: types.optional(types.identifier, ''),
  name: types.optional(types.string, ""),
  description: types.optional(types.string, ""),
  price: types.optional(types.number, 0),
  img: types.optional(types.string, ""),
})