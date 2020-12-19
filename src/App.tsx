import { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import GlobalStyle from './globalStyles'

import NavBar from './components/NavBar'

//pages
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ErrorPage from './components/ErrorPage'
import CartPage from './components/CartPage'
import CheckoutPage from './components/CheckoutPage'





function App() {

  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Fragment>
  );
}

export default observer(App);
