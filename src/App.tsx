import { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import GlobalStyle from './globalStyles'

import HomePage from './components/HomePage'





function App() {

  return (
    <Fragment>
      <GlobalStyle />
      {/* {navBar} */}
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </Fragment>
  );
}

export default observer(App);
