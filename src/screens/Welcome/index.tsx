import React from "react";
import { StatusBar } from "expo-status-bar";

import { Button } from "@/components/Button";
import { NavigationProps } from "@/dtos/stackProps";

import Logo from "@/assets/logo.svg";
import * as S from "./styles";

export function Welcome({navigation}: NavigationProps) {
  return (
    <>
      <StatusBar hidden />
      <S.Container>
        <S.HeaderDetail>
          <S.CircleLogo>
            <Logo />
          </S.CircleLogo>

          <S.Title>Food for Everyone</S.Title>
        </S.HeaderDetail>

        <S.WrapperImage>
          <S.ContainerImage>
            <S.FemaleAvatar
              source={require("@/assets/images/female-avatar.png")}
              resizeMode="contain"
            />

            <S.MaleAvatar
              source={require("@/assets/images/male-avatar.png")}
              resizeMode="contain"
            />
          </S.ContainerImage>
          <S.Overlay />
        </S.WrapperImage>

        <S.Wrapper>
          <Button name="Começar" onPress={() => navigation.navigate("Home")}/>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
