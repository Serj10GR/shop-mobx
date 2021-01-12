import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { useStore } from '../../hooks/useStore'

import {
  NavBarContainer,
  NavHeader,
  NavCenter,
  NavButton,
  NavMenuIcon,
  CloseMenuIcon,
  ShoppingCartIcon,
  CartLink,
  NavButtonsWrapper,
  ShoppingCartItems,
  NavList,
  NavListItem,
} from './styled'

const NavBar = () => {
  const { cart } = useStore()
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(!isOpen)
  const itemsAmount = cart.getNumberOfItems()
  return (
    <NavBarContainer>
      <NavCenter>
        <NavHeader>
          <Link to='/'>Speranta Plus Sashimi</Link>
          <NavButtonsWrapper>
            <CartLink to='/cart'>
              <ShoppingCartIcon />
               {
                 itemsAmount > 0
                 &&
                <ShoppingCartItems>{itemsAmount}</ShoppingCartItems>
               }
            </CartLink>
            <NavButton onClick={handleToggle}>
              {isOpen ? <CloseMenuIcon /> : <NavMenuIcon />}
            </NavButton>
          </NavButtonsWrapper>
        </NavHeader>
        <NavList isOpen={isOpen}>
          <NavListItem>
            <Link to='/about'>Despre noi</Link>
          </NavListItem>
          <NavListItem>
            <Link to='/contact'>Contacte</Link>
          </NavListItem>
        </NavList>
      </NavCenter>
    </NavBarContainer>
  )
}

export default observer(NavBar)
