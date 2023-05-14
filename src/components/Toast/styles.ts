import styled, { css, DefaultTheme } from 'styled-components/native';

type ContainerProps = {
  type: 'success' | 'warning' | 'error' | string;
};

const containerModifier = {
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.success};
  `,

  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.warning};
  `,

  error: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.error};
  `,
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, type }) => css`
    width: 93%;
    min-height: 44px;
    border-radius: 10px;
    padding: 16px 0 16px 30px;

    flex-direction: row;

    ${containerModifier[type](theme)}
  `}
`;

export const WrapperIcon = styled.View`
  margin-top: 6px;
`;

export const WrapperMessage = styled.View`
  margin-left: 16px;
  width: 90%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    margin-bottom: 4px;

    font-family: ${theme.fonts.inter[600]};
    color: ${theme.colors.white};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    width: 92%;
    font-size: 14px;

    font-family: ${theme.fonts.inter[400]};
    color: ${theme.colors.white};
  `};
`;
