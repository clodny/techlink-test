import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const ProductsPage = () => {
  useEffect(() => {
    this.props.getProductsRequest()
  })

  const goToProduct = id => this.props.history.push(`/products/${id}`)

  const products = this.props.products.map(prod => (
    <Card>
      <CardActionArea onClick={goToProduct}>
        <CardMedia
          image={prod.image}
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
    </Card>
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
