import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 18px 40px;
  align-items: center;
  background-color: #122538;
`

const Company = styled.div`
  color: white;
  width: 120px
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10%;
  width: calc(100% - 120px);
  a {
    color: white;
  }
`

const Cart = styled(Badge)`
  margin-left: auto;
`

export default function Header(props) {
  return (
    <HeaderDiv>
      <Company>Great Company</Company>
      <Links>
        <Link to='/products'>Products</Link>
        <Cart badgeContent={props.cartCount} color="secondary">
          <Link to="/cart">Cart</Link>
        </Cart>
      </Links>
    </HeaderDiv>
  );
}
