import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  border-radius: 30px;
  padding-left: 25px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.zinc[400]};
`;

export const Input = styled.TextInput`
  width: 100%;
  margin-left: 12px;
`;
