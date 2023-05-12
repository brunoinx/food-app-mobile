import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

export interface ButtonProps extends TouchableOpacityProps {
  name: string;
  type?: 'PRIMARY' | 'SECONDARY';
}

export function Button({ name, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <S.Container activeOpacity={0.8} type={type} {...rest}>
      <S.Title type={type}>{name}</S.Title>
    </S.Container>
  );
}
