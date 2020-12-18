import { useEffect, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { store } from './stores/rootStore'
import {values} from 'mobx'
import GlobalStyle from './globalStyles'

import HomePage from './components/HomePage'





function App() {

  useEffect(() => {
   store.setProducts()
  }, [])
 
  return (
    <Fragment>
      <GlobalStyle />
      {/* {navBar} */}
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>

      {/* {store.getProductsSum()}
      {values(store.products).map(product => <div key={product.id}>{product.name}</div>)} */}

    </Fragment>
  );
}

export default observer(App);
