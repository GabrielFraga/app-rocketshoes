import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import background from '../../assets/images/background.svg';

export const Container = styled.View`
  flex: 1;
  padding: 20px;

  background: #222 url(${background}) no-repeat center top;
`;
