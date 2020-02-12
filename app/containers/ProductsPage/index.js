import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { 
  getProductsRequest,
} from '../../actions/products'
import ProductItem from '../../components/ProductItem';

const MyGridList = styled(GridList)`
  width: 66%;
  display: flex;
  align-items: center;
`

const ProdList = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const MyListTile = styled(GridListTile)`
  .MuiGridListTile-tile {
    padding: 12px;
  }
`

const PageTitle = styled.div`
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 24px;
  margin-top: 48px;
`

const ProductsPage = (props) => {
  const goToProduct = id => props.history.push(`/products/${id}`)

  const products = props.products.map(product => (
    <MyListTile key={`product-${product.id}`}>
      <ProductItem product={product} onClick={() => goToProduct(product.id)} />
    </MyListTile>
  ))

  return (
    <div className='products-page'>
      <PageTitle>Products</PageTitle>
      <ProdList>
        <MyGridList cellHeight={'auto'} cols={3}>
          { products }
        </MyGridList>
      </ProdList>
    </div>
  )
}


const mapDispatchToProps = {
  getProductsRequest,
}

const mapStateToProps = state => ({
  products: state.products.data
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
