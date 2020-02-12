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
    display: block;
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

const TotalPrice = styled.div`
  > span {
    color: #f84147;
    font-size: 24px;
    margin-bottom: 24px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`

const CartPage = (props) => {
  const onRemoveOne = id => props.removeFromCartRequest([id])
  const onRemoveAll = () => props.removeFromCartRequest(props.cart.map(cartItem => cartItem.id))
  let totalPrice = 0

  const cartItemEls = props.cart.map(cartItem => (
    <MyListTile key={`cart-item-${cartItem.id}`}>
      <CartItem
        product={cartItem}
        changeQuantity={props.changeQuantityRequest}
        onRemove={onRemoveOne}
      />
    </MyListTile>
  ))
  if(props.cart.length) props.cart.map(cartItem => totalPrice = totalPrice + cartItem.price*cartItem.quantity)
  const buttonsBlock = (
    <React.Fragment>
      <TotalPrice>
        <span>Total price: {totalPrice}$</span>
        <ProceedButton>Proceed</ProceedButton>
      </TotalPrice>
      <div className='clear-all'>
        <ClearButton onClick={onRemoveAll}>Clear Cart</ClearButton>
      </div>
    </React.Fragment>
  )

  const emptyState = (
    <EmptyState>
      No items in cart
    </EmptyState>
  )


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