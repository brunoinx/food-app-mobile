import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 42px;
`;

export const WrapperScreen = styled.View`
  padding: 0 40px;
`;

export const IconContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 62px;
  width: 62px;
  border-radius: 31px;

  margin-top: 20px;

  position: absolute;
  right: 6%;

  align-items: center;
  justify-content: center;

  z-index: -10;

  background-color: ${({ theme }) => theme.colors.error};
`;

export const WrapperInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Info = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    line-height: 13px;

    color: ${theme.colors.black};
    font-family: ${theme.fonts.inter[400]};
    margin-left: 6px;
  `};
`;

export const WrapperItem = styled.View`
  margin-bottom: 14px;
`;

export const EmptyWrapper = styled.View`
  width: 90%;
  margin: 0 auto;
  margin-top: 80px;

  align-items: center;
`;

export const EmptyTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 28px;
    margin: 38px 0 16px;
    text-align: center;

    font-family: ${theme.fonts.inter[600]};
    color: ${theme.colors.black};
  `};
`;

export const EmptyDescription = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    text-align: center;

    font-family: ${theme.fonts.inter[400]};
    color: ${theme.colors.blackOpc};
  `};
`;
