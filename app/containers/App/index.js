import React from 'react';
import { connect } from 'react-redux';
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
  padding: 0 0;
  flex-direction: column;
`;

const App = (props) => {
  return (
    <AppWrapper>
      <Header cartCount={props.cart.length} />
      <Switch>
        <Route exact path="/" render={() => <Redirect to='/products' />} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/products/:id" component={ProductItemPage} />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
    </AppWrapper>
  );
}

const mapDispatchToProps = {}

const mapStateToProps = state => ({
  cart: state.products.cart
})

export default connect(mapStateToProps, mapDispatchToProps)(App)