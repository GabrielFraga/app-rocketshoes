import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
// import { formatPrice } from '../../util/format';

import {
  ProductList,
  Container,
  List,
  ProductImage,
  ProductTitle,
  PriceTag,
  AddProductButton,
  CartIcon,
  ButtonTitle,
  ItemNumber,
  ButtonName,
} from './styles';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('products');
      const apiProducts = response.data.map(product => ({
        ...product,
        priceFormatted: `R$${product.price}`,
        // priceFormatted: formatPrice(product.price),
      }));

      setProducts(apiProducts);
    })();
  }, []);

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => product.id}
        numColumns={2} // Número de colunas
        renderItem={({ item }) => (
          <List>
            <ProductImage
              style={{ width: 100, height: 100 }}
              source={{ uri: item.image }}
              alt={item.title}
            />
            <ProductTitle>{item.title}</ProductTitle>
            <PriceTag>{item.priceFormatted}</PriceTag>
            <AddProductButton>
              <CartIcon>
                <Icon name="add-shopping-cart" size={18} color="#fff" />
                <ItemNumber>0</ItemNumber>
              </CartIcon>
              <ButtonName>
                <ButtonTitle>ADICIONAR</ButtonTitle>
              </ButtonName>
            </AddProductButton>
          </List>
        )}
      />
    </Container>
  );
}
export default Home;
