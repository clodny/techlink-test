import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import some from 'lodash/some';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { 
  changeQuantityRequest,
  removeFromCartRequest
} from '../../actions/products'
import { Button } from '@material-ui/core';
import CartItem from '../../components/CartItem';

const CartPageEl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MyGridList = styled(GridList)`
  width: 500px;
  display: flex;
  align-items: center;
  margin-bottom: 12px !important;
`

const MyListTile = styled(GridListTile)`
  .MuiGridListTile-tile {
    padding: 12px;
  }
`

const ClearButton = styled(Button)`
  &.MuiButton-root {
    padding: 8px 24px;
    background-color: gray;
    color: white;
    text-align: center;
    margin-bottom: 24px;
  
    &:hover {
      background-color: gray;
      opacity: 0.6;
    }
  }
`

const ProceedButton = styled(Button)`
  &.MuiButton-root {
    padding: 8px 24px;
    background-color: green;
    color: white;
    text-align: center;
    margin-bottom: 24px;
  
    &:hover {
      background-color: green;
      opacity: 0.6;
    }
  }
`

const EmptyState = styled.div`
  margin-top: 52px;
  font-size: 28px;
  color: gray;
`

const CartPage = (props) => {
  const onRemoveOne = id => props.removeFromCartRequest([id])
  const onRemoveAll = () => props.removeFromCartRequest(props.cart.map(cartItem => cartItem.id))

  const cartItems = props.products.filter(prod => some(props.cart, inCart => inCart.id === prod.id))
  const cartItemEls = cartItems.map(cartItem => (
    <MyListTile>
      <CartItem product={cartItem} changeQuantity={props.changeQuantityRequest}/>
    </MyListTile>
  ))

  const buttonsBlock = (
    <React.Fragment>
      <div className='clear-all'>
        <ClearButton onClick={onRemoveAll}>Clear Cart</ClearButton>
      </div>
      <div className='total-price'>
        {/* {totalPrice}$ */}
        <ProceedButton>Proceed</ProceedButton>
      </div>
    </React.Fragment>
  )

  const emptyState = (
    <EmptyState>
      No items in cart
    </EmptyState>
  )

  // const totalPrice = cartItems.length && cartItems.reduce((total, item) => total + item.price*item.quantity)

  return (
    <CartPageEl>
      <MyGridList cellHeight={'auto'} cols={1}>
        { cartItemEls }
      </MyGridList>
      
      {
        props.cart.length ?
          buttonsBlock :
          emptyState
      }
      
      
    </CartPageEl>      
  )
}


const mapDispatchToProps = {
  changeQuantityRequest,
  removeFromCartRequest
}

const mapStateToProps = state => ({
  cart: state.products.cart,
  products: state.products.data
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)