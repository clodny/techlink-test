import React from 'react';
import styled from 'styled-components';
import Link from '@material-ui/core/Link';

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 18px 40px;
  align-items: center;
`;

export default function Header(props) {
  return (
    <HeaderDiv>
      <div className='links'>
        <Link href="/products">
          Products
        </Link>
        <Link href="/cart">
          Cart
        </Link>
      </div>
    </HeaderDiv>
  );
}
