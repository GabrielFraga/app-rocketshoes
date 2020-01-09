import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 5px;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
`;
export const ProductList = styled.FlatList``;

export const Item = styled.View`
  flex-direction: row;
`;

export const Description = styled.View`
  flex: 1;
`;

export const ProductImage = styled.Image`
  align-self: center;
  padding: 50px;
`;

export const ProductTitle = styled.Text``;

export const PriceTag = styled.Text`
  color: #333;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
`;

export const DetailedItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  background: #ececec;
  border-radius: 4px;
  margin-bottom: 55px;
  align-items: center;
`;

export const ChangeAmount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Amount = styled.Text`
  width: 50px;
  height: 25px;
  background: #fff;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 4px;
`;
export const Total = styled.Text``;
