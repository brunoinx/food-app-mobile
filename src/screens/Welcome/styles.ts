import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ff4b3a;
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
  font-size: 65px;
  font-weight: 800;
  line-height: 66px;
  margin-left: 2px;
  color: #fff;
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
  height: 42px;
  z-index: 99;
  background-color: #FF470B82;
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
