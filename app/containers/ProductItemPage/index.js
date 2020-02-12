import React, { useState, useEffect } from 'react';
import find from 'lodash/find';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { 
  getProductByIdRequest,
  addToCartRequest
} from '../../actions/products'

const ItemTitle = styled.div`
  font-size: 24px;
  line-height: 24px;
  text-align: center;
`
const InfoLine = styled.div`
  font-weight: 500;
`

const ProdImg = styled.img`
  width: 100%;
`

const ProductItemPage = (props) => {
  const productId = props.match.params.id
  const productItem = find(props.products, { id: productId })
  const addToCart = () => {
    props.addToCartRequest(productId)
  }
  const isInCart = props.cart.indexOf(productId) > -1

  useEffect(() => {
    if(!props.products.length) props.getProductByIdRequest(productId)
  })

  if(!productItem) return null
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ItemTitle>{productItem.title}</ItemTitle>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className='item-image'>
          <ProdImg src='https://picsum.photos/700/500' />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className='item-buy'>
          <span>{productItem.price}$</span>
          { 
            isInCart ? 
              <Button onClick={addToCart}>Buy</Button> : 
              <div className='in-the-cart'>Already in your cart</div>
          }
        </div>
        <div className='item-info'>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <InfoLine>Type:</InfoLine> 
              <InfoLine>Material:</InfoLine> 
              <InfoLine>Dimension:</InfoLine> 
              <InfoLine>Color:</InfoLine> 
              <InfoLine>Warranty:</InfoLine> 
              <InfoLine>Country of origin:</InfoLine> 
              <InfoLine>Brand country:</InfoLine> 
            </Grid>
            <Grid item xs={6}>
              <div>{productItem.type}</div> 
              <div>{productItem.material}</div> 
              <div>{productItem.dimension}</div> 
              <div>{productItem.color}</div> 
              <div>{productItem.warranty}</div> 
              <div>{productItem.countryOfOrigin}</div> 
              <div>{productItem.brandCountry}</div> 
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  )
}


const mapDispatchToProps = {
  getProductByIdRequest,
  addToCartRequest
}

const mapStateToProps = state => ({
  products: state.products.data,
  cart: state.products.cart
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemPage)