import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding-top: 65px;
    padding-left: 50px;
    background-color: ${theme.colors.zinc[300]};
  `}
`;

export const Wrapper = styled.View`
  padding-right: 41px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 43px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 34px;
    line-height: 40px;
    margin-bottom: 28px;
    color: ${theme.colors.black};
    font-family: ${theme.fonts.inter[700]};
  `};
`;
