import { store } from '../../stores/rootStore'

import { Wrapper, Button } from './styled'

const Categories = () => {
  return (
    <Wrapper>
      {store.categories.map(category => <Button>{category.name}</Button>)}
    </Wrapper>
  )
}

export default Categories
