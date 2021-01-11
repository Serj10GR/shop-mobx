import { Fragment } from 'react'
import Products from '../Products'
import Categories from '../Categories'

const HomePage = () => {
  return (
    <Fragment>
      <Categories />
      <Products />
    </Fragment>
  )
}

export default HomePage
