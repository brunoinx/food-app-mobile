import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.main[500]};
`;

export const HeaderDetail = styled.View`
  margin-left: 49px;
  margin-bottom: 75px;
`;

export const CircleLogo = styled.View`
  height: 73px;
  width: 73px;

  justify-content: center;
  align-items: center;
  border-radius: 38px;
  margin: 56px 0 31px;
  background-color: #fff;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 58px;
    line-height: 66px;
    margin-left: 2px;
    font-family: ${theme.fonts.inter[800]};
    color: ${theme.colors.white};
  `}
`;

export const WrapperImage = styled.View`
  width: 100%;
  height: 38%;
`;

export const ContainerImage = styled.View`
  flex-direction: row;
  height: 100%;
  overflow: hidden;
`;

export const Overlay = styled.View`
  width: 100%;
  height: 46px;
  z-index: 99;
  background-color: #ff470b82;
  position: absolute;
  bottom: 0;
`;

export const FemaleAvatar = styled.Image`
  height: 100%;
  width: 70%;
  left: -40px;
  z-index: 10;
`;

export const MaleAvatar = styled.Image`
  height: 100%;
  width: 66%;
  z-index: 0;
  right: 38%;
  top: 20px;
  transform: rotate(-2.2deg);
`;

export const Wrapper = styled.View`
  margin: 26px 49px 0;
`;
