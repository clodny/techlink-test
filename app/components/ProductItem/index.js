import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';

const ProdImg = styled.img`
  width: 100%;
  margin-bottom: 8px;
`

const ProductItem = (props) => {
  const { product, onClick } = props
  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <ProdImg src='https://picsum.photos/700/500' />
          <Typography gutterBottom component="h3">
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductItem
