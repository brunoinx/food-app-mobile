import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather, AntDesign } from '@expo/vector-icons';

import * as S from './styles';

interface CustomToastProps {
  title: string;
  description: string;
  type?: 'success' | 'warning' | 'error';
}

export function CustomToast({
  title,
  description,
  type = 'success',
}: CustomToastProps) {
  const theme = useTheme();

  return (
    <S.Container style={styles.container} type={type}>
      <S.WrapperIcon>
        {type === 'success' && (
          <Feather name="check-circle" size={33} color={theme.colors.white} />
        )}

        {type === 'warning' && (
          <AntDesign name="warning" size={33} color={theme.colors.white} />
        )}

        {type === 'error' && (
          <Feather name="x-octagon" size={33} color={theme.colors.white} />
        )}
      </S.WrapperIcon>

      <S.WrapperMessage>
        <S.Title>{title}</S.Title>

        <S.Description>{description}</S.Description>
      </S.WrapperMessage>
    </S.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 12,
  },
});
