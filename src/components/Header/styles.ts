import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  background-color: ${({ theme }) => theme.colors.zinc[200]};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    line-height: 22px;
    font-family: ${theme.fonts.inter[600]};
    color: ${theme.colors.black};
  `};
`;
