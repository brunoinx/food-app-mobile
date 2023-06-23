import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding-top: 65px;
    background-color: ${theme.colors.zinc[200]};
  `}
`;

export const WrapperHeading = styled.View`
  padding-left: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 41px 42px 0;
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

export const WrapperList = styled.View`
  margin-top: 64px;
`;

export const WrapperCard = styled.View`
  margin-right: 28px;
`;
