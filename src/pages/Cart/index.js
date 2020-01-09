import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { addToCartRequest } from '../../store/modules/cart/actions';
import Background from '../../components/Background';

import {
  Container,
  ProductList,
  ProductImage,
  ProductTitle,
  PriceTag,
  Item,
  Description,
  DetailedItem,
  ChangeAmount,
  Amount,
} from './styles';

function Cart() {
  const products = useSelector(state => ({
    cart: state.cart.map(product => ({
      ...product,
      subtotal: product.price * product.amount,
    })),
    total: state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0),
  }));

  return (
    <Background>
      <Container>
        <ProductList
          data={products.cart}
          keyExtractor={product => product.id}
          renderItem={({ item }) => (
            <>
              <Item>
                <ProductImage
                  style={{ width: 50, height: 50 }}
                  source={{ uri: item.image }}
                  alt={item.title}
                />
                <Description>
                  <ProductTitle>{item.title}</ProductTitle>
                  <PriceTag>{item.priceFormatted}</PriceTag>
                </Description>
                <Icon name="delete-forever" size={26} color="#7159c1" />
              </Item>
              <DetailedItem>
                <ChangeAmount>
                  <Icon
                    name="remove-circle-outline"
                    size={26}
                    color="#7159c1"
                  />
                  <Amount>{item.amount}</Amount>
                  <Icon name="add-circle-outline" size={26} color="#7159c1" />
                </ChangeAmount>
                <PriceTag>R${item.subtotal}</PriceTag>
              </DetailedItem>
            </>
          )}
        />
      </Container>
    </Background>
  );
}
export default Cart;
