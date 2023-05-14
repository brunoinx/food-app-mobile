import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  height: 100%;
  max-height: ${height - 298}px;
  padding: 40px 40px 20px;

  justify-content: space-between;
`;

export const Form = styled.View`
  margin-right: 24px;
`;

export const WrapperInput = styled.View`
  margin-bottom: 30px;
`;
