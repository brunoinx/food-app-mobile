import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 28px;
  background-color: ${({ theme }) => theme.colors.zinc[200]};
`;

export const WrapperHeader = styled.View`
  padding: 0 32px 0;
`;
