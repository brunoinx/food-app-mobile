import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  name: string;
}

export function Button({ name, ...rest }: ButtonProps) {
  return (
    <S.Container activeOpacity={0.8} {...rest}>
      <S.Title>{name}</S.Title>
    </S.Container>
  );
}
