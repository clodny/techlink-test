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
  margin-top: 48px;
  margin-bottom: 48px;
`
const InfoLine = styled.div`
  font-weight: 500;
  margin-bottom: 12px;
`

const InfoLineValue = styled.div`
  margin-bottom: 12px;
`

const ProdImg = styled.img`
  width: 350px;
`

const ItemImage = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ItemBuy = styled.div`
  margin-bottom: 24px;
  color: #f84147;
  font-size: 24px;

  > span {
    margin-right: 48px;
  }
`

const InTheCart = styled.div`
  color: gray;
  display: inline-block;
`

const BuyButton = styled(Button)`

  &.MuiButton-root {
    padding: 8px 24px;
    background-color: green;
    color: white;
    text-align: center;
  
    &:hover {
      background-color: green;
      opacity: 0.6;
    }
  }
  
`

const ProductItemPage = (props) => {
  const productId = props.match.params.id
  const productItem = find(props.products, { id: productId })
  const addToCart = () => props.addToCartRequest(productId)
  const isInCart = find(props.cart, { id: productId })

  if(!productItem) return null
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ItemTitle>{productItem.title}</ItemTitle>
      </Grid>
      <Grid item xs={12} sm={6}>
        <ItemImage>
          <ProdImg src='https://picsum.photos/700/500' />
        </ItemImage>
      </Grid>
      <Grid item xs={12} sm={6}>
        <ItemBuy>
          <span>{productItem.price}$</span>
          { 
            isInCart ? 
              <InTheCart>Already in your cart</InTheCart> : 
              <BuyButton onClick={addToCart}>Buy</BuyButton>
          }
        </ItemBuy>
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
              <InfoLineValue>{productItem.type}</InfoLineValue> 
              <InfoLineValue>{productItem.material}</InfoLineValue> 
              <InfoLineValue>{productItem.dimension}</InfoLineValue> 
              <InfoLineValue>{productItem.color}</InfoLineValue> 
              <InfoLineValue>{productItem.warranty}</InfoLineValue> 
              <InfoLineValue>{productItem.countryOfOrigin}</InfoLineValue> 
              <InfoLineValue>{productItem.brandCountry}</InfoLineValue> 
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