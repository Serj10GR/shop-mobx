import { useStore } from '../../hooks/useStore'

import { Wrapper, Button } from './styled'

const Categories = () => {
  const { rootStore } = useStore()
  return (
    <Wrapper>
      {rootStore.categories.map(category => <Button>{category.name}</Button>)}
    </Wrapper>
  )
}

export default Categories
