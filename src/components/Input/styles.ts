import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 54px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.blackOpc};
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: 15px;
    line-height: 18px;
    padding-bottom: 6px;

    color: ${theme.colors.blackOpc};
    font-family: ${theme.fonts.inter[500]};
  `};
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    height: 60%;

    font-size: 17px;

    font-family: ${theme.fonts.inter[600]};
    color: ${theme.colors.black};
  `};
`;
