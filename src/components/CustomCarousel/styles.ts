import styled, { css } from 'styled-components/native';

type DotsProps = {
  active: boolean;
};

export const DotsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;

  margin-top: -12px;
`;

export const Dots = styled.View<DotsProps>`
  ${({ theme, active }) => css`
    height: 8px;
    width: 8px;
    border-radius: 4px;

    background-color: ${active
      ? theme.colors.main[400]
      : theme.colors.zinc[500]};
  `};
`;
