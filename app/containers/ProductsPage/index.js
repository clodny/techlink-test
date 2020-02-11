import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { 
  getProductsRequest,
} from '../../actions/products'

const ProdItem = styled(Card)`
  margin-bottom: 12px;
  width: 30%;
`

const ProductsPage = (props) => {
  useEffect(() => {
    props.getProductsRequest()
  })

  const goToProduct = id => props.history.push(`/products/${id}`)

  const products = props.products.map(prod => (
    <ProdItem key={`product-${prod.id}`}>
      <CardActionArea onClick={() => goToProduct(prod.id)}>
        <CardMedia
          image='https://picsum.photos/700/500'
          title={prod.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {prod.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {prod.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </ProdItem>
  ))

  return (
    <div className='products-page'>
      <div className='products-list'>
        { products }
      </div>
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
