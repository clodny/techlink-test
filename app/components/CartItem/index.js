import React from 'react';
import debounce from 'lodash/debounce';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const ProdImg = styled.img`
  width: 100%;
  margin-bottom: 8px;
`

const MyGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .MuiTextField-root {
    width: 40px;
    margin: 0 12px;
  }
`

const RemoveButton = styled(Button)`
  &.MuiButton-root {
    background-color: white;
    position: absolute;
    border-radius: 0;
  }
`

const PriceGrid = styled(Grid)`
  &.MuiGrid-root {
    margin-top: 12px;
  }
`

const MinusItem = styled(RemoveIcon)`
  &[disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
`

const PlusItem = styled(AddIcon)`
  &[disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
`

const CartItem = (props) => {
  const { product, changeQuantity, onRemove } = props
  const onQuantityChange = (value) => {
    changeQuantity(product.id, value)
  }
  return (
    <Card>
      <CardContent>
        <RemoveButton onClick={() => onRemove(product.id)}>X</RemoveButton>
        <ProdImg src='https://picsum.photos/700/500' />
        <Typography gutterBottom component="h3">
          {product.title}
        </Typography>
        <PriceGrid container spacing={3}>
          <MyGrid item xs={4}>
            <span className='item-price'>Price: {product.price}$</span>
          </MyGrid>
          <MyGrid item xs={4}>
            <MinusItem disabled={product.quantity === 1} onClick={() => onQuantityChange(product.quantity-1)} />
            <TextField value={product.quantity} onChange={e => debounce(() => onQuantityChange(e.target.value), 300)} />
            <PlusItem disabled={product.quantity === product.maxQuantity} onClick={() => onQuantityChange(product.quantity+1)} />
          </MyGrid>
          <MyGrid item xs={4}>
            <span className='item-total'>Total: {product.price * product.quantity}$</span>
          </MyGrid>
        </PriceGrid>
        
      </CardContent>
    </Card>
  )
}

export default CartItem
