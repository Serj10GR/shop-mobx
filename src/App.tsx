import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { store } from './stores/rootStore'
import {values} from 'mobx'





function App() {

  useEffect(() => {
   store.setProducts()
  }, [])
 
  return (
    <div>
      {store.getProductsSum()}
      {values(store.products).map(product => <div key={product.id}>{product.name}</div>)}
    </div>
  );
}

export default observer(App);
