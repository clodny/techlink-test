import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import some from 'lodash/some';
import { 
  changeQuantityRequest,
  removeFromCartRequest
} from '../../actions/products'
import { Button } from '@material-ui/core';

const CartPage = (props) => {
  const onRemoveOne = id => props.removeFromCartRequest([id])
  const onRemoveAll = () => props.removeFromCartRequest(props.cart.map(cartItem => cartItem.id))

  const cartItems = props.products.filter(prod => some(props.cart, inCart => inCart.id === prod.id))
  const cartItemEls = cartItems.map(cartItem => (
    <div className='cart-item'>
      <Button onClick={() => onRemoveOne(cartItem.id)}>X</Button>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <img src='https://picsum.photos/700/500' />
        </Grid>
        <Grid item xs={12}>
          <span className='item-title'>{cartItem.title}</span>
        </Grid>
        <Grid item xs={4}>
          <span className='item-price'>{cartItem.price}</span>
        </Grid>
        <Grid item xs={4}>
          {cartItem.quantity}
        </Grid>
        <Grid item xs={4}>
          <span className='item-total'>{cartItem.price * cartItem.quantity}</span>
        </Grid>
      </Grid>
    </div>
  ))

  const totalPrice = cartItems.length && cartItems.reduce((total, item) => total + item.price*item.quantity)

  return (
    <div className='cart-page'>
      { cartItems }
      <div className='clear-all'>
        <Button onClick={onRemoveAll}>Clear Cart</Button>
      </div>
      <div className='total-price'>
        {totalPrice}$
        <Button>Proceed</Button>
      </div>
    </div>
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