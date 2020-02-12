import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ProdImg = styled.img`
  width: 100%;
  margin-bottom: 8px;
`

const CartItem = (props) => {
  const { product, changeQuantity } = props
  return (
    <Card>
      <CardContent>
        <ProdImg src='https://picsum.photos/700/500' />
        <Typography gutterBottom component="h3">
          {product.title}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <span className='item-price'>{product.price}</span>
          </Grid>
          <Grid item xs={4}>
            {cartItem.quantity}
          </Grid>
          <Grid item xs={4}>
            <span className='item-total'>{cartItem.price * cartItem.quantity}</span>
          </Grid>
        </Grid>
        
      </CardContent>
    </Card>
  )
}

export default CartItem
