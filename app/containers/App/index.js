import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/Header';
import ProductsPage from 'containers/ProductsPage';
import ProductItemPage from 'containers/ProductItemPage';
import CartPage from 'containers/CartPage';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  min-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Header/>
      <Switch>
        <Route exact path="/" render={() => <Redirect to='/products' />} />
        <Route exact path="/products" component={ProductsPage} />
        {/* <Route exact path="/products/:id" component={ProductItemPage} />
        <Route exact path="/cart" component={CartPage} /> */}
      </Switch>
    </AppWrapper>
  );
}
