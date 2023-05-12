import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.zinc[300]};
`;

export const Title = styled.Text`
  font-size: 30px;
`;
