import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding: 16px 17px;
    border-radius: 20px;
    flex-direction: row;

    background-color: ${theme.colors.white};
  `};
`;

export const FoodImage = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
  margin-right: 15px;
`;

export const GroupInfo = styled.View`
  margin-top: 11px;
  width: 160px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 17px;
    line-height: 20px;

    color: ${theme.colors.black};
    font-family: ${theme.fonts.inter[600]};
  `};
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    line-height: 17px;
    margin-top: 12px;

    color: ${theme.colors.main[400]};
    font-family: ${theme.fonts.inter[600]};
  `};
`;

export const AmountView = styled.View`
  height: 22px;
  width: 56px;
  padding: 0 2px;
  margin-left: -20px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;

  background-color: ${({ theme }) => theme.colors.main[400]};
`;

export const AmountButton = styled.TouchableOpacity`
  height: 100%;
  width: 30%;

  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const AmountText = styled.Text`
  ${({ theme }) => css`
    font-size: 13px;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.inter[600]};
  `};
`;
