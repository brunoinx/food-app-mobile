import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';

import * as S from './styles';
import { useTheme } from 'styled-components';

export interface ButtonProps extends TouchableOpacityProps {
  name: string;
  type?: 'PRIMARY' | 'SECONDARY';
  loading?: boolean;
}

export function Button({
  name,
  type = 'PRIMARY',
  loading,
  ...rest
}: ButtonProps) {
  const { colors } = useTheme();

  return (
    <S.Container activeOpacity={0.8} type={type} {...rest}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.white} />
      ) : (
        <S.Title type={type}>{name}</S.Title>
      )}
    </S.Container>
  );
}
