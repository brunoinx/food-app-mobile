import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  height: 100%;
  max-height: ${height - 298}px;
  padding: 52px 40px 28px;

  justify-content: space-between;
`;

export const Form = styled.View`
  margin-right: 24px;
`;

export const WrapperInput = styled.View`
  margin: 40px 0 22px;
`;

export const ForgotPassword = styled.Text`
  ${({ theme }) => css`
    font-size: 17px;
    line-height: 20px;

    color: ${theme.colors.main[400]};
    font-family: ${theme.fonts.inter[600]};
  `};
`;
