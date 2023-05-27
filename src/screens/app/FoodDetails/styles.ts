import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding-top: 44px;
    background-color: ${theme.colors.zinc[200]};
  `};
`;

export const WrapperHeader = styled.View`
  padding: 0 42px;
`;

export const WrapperCarousel = styled.View`
  width: 100%;
  height: 34%;
  margin-top: 16px;
  align-items: center;
`;

export const FoodName = styled.Text`
  ${({ theme }) => css`
    font-size: 28px;

    line-height: 33px;
    text-align: center;
    margin: 12px 0 10px;

    font-family: ${theme.fonts.inter[600]};
    color: ${theme.colors.black};
  `};
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-size: 22px;
    line-height: 26px;
    text-align: center;

    font-family: ${theme.fonts.inter[700]};
    color: ${theme.colors.main[400]};
  `};
`;

export const WrapperInfo = styled.View`
  margin-top: 30px;
  padding: 0 46px;
`;

export const InfoTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 17px;
    line-height: 20px;

    font-family: ${theme.fonts.inter[600]};
    color: ${theme.colors.black};
  `};
`;

export const InfoDescription = styled.Text`
  ${({ theme }) => css`
    font-size: 15px;
    line-height: 20px;
    margin-top: 8px;
    text-align: justify;

    font-family: ${theme.fonts.inter[400]};
    color: ${theme.colors.blackOpc};
  `};
`;

export const WrapperButton = styled.View`
  width: 100%;
  padding: 0 42px;

  position: absolute;
  bottom: 24px;
`;
