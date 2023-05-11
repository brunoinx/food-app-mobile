import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  height: 320px;
`;

export const Box = styled.View`
  padding: 0 28px 26px;
  border-radius: 18px;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const FoodImage = styled.Image`
  height: 125px;
  width: 125px;
  border-radius: 80px;
  margin-top: -60px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: 22px;
    line-height: 23px;
    margin-top: 48px;
    color: ${theme.colors.black};
    font-family: ${theme.fonts.inter[600]};
  `};
`;

export const ValueText = styled.Text`
  ${({ theme }) => css`
    margin-top: 14px;
    text-align: center;
    font-size: 17px;
    line-height: 20px;
    color: ${theme.colors.main[400]};
    font-family: ${theme.fonts.inter[700]};
  `};
`;
