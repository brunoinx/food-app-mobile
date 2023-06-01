import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View`
  width: 100%;
  height: 60%;
  max-height: 382px;
  margin-top: 150px;

  align-items: center;
  padding: 0 34px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 28px;
    margin: 7px 0 16px;
    text-align: center;

    font-family: ${theme.fonts.inter[600]};
    color: ${theme.colors.black};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    text-align: center;
    margin-bottom: 52px;

    font-family: ${theme.fonts.inter[400]};
    color: ${theme.colors.blackOpc};
  `};
`;
