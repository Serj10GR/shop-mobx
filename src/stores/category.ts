import { types, Instance } from "mobx-state-tree"

export const Category = types.model({
  id: types.optional(types.identifier, ''),
  name: types.optional(types.string, "")
})

export type CategoryType = Instance<typeof Category>