import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderBox = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 36%;
    max-height: 362px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    padding-top: 68px;

    align-items: center;
    z-index: 1;
    overflow: hidden;

    background-color: ${theme.colors.white};
  `};
`;

export const WrapperImage = styled.View`
  margin-bottom: 42px;
`;

export const WrapperTabs = styled.View`
  width: 100%;
  height: 100%;
  margin-top: -50px;
  z-index: 10;
`;
