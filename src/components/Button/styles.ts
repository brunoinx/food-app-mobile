import styled, { css, DefaultTheme } from 'styled-components/native';
import { ButtonProps } from '.';
import { TouchableOpacity } from 'react-native';

type ContainerProps = Pick<ButtonProps, 'type'>;

const containerModifier = {
  PRIMARY: ({ colors }: DefaultTheme) => css`
    background-color: ${colors.main[400]};
  `,
  SECONDARY: ({ colors }: DefaultTheme) => css`
    background-color: ${colors.white};
  `,
};

const titleModifier = {
  PRIMARY: ({ colors }: DefaultTheme) => css`
    color: ${colors.white};
  `,
  SECONDARY: ({ colors }: DefaultTheme) => css`
    color: ${colors.main[400]};
  `,
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  ${({ theme, type }) => css`
    width: 100%;
    height: 70px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;

    ${containerModifier[type](theme)}
  `};
`;

export const Title = styled.Text<ContainerProps>`
  ${({ theme, type }) => css`
    font-size: 17px;
    font-family: ${theme.fonts.inter[600]};

    ${titleModifier[type](theme)}
  `}
`;
