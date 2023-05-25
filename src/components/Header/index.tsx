import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CaretLeft, Heart } from 'phosphor-react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/dtos/RootParamsListDTO';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface HeaderProps {
  name?: string;
  isFavorite?: boolean;
  handleAddFavorite?: () => void;
  handleBack?: () => void;
}

export function Header({
  name,
  isFavorite = false,
  handleAddFavorite,
  handleBack,
}: HeaderProps) {
  const { goBack } = useNavigation();
  const { colors } = useTheme();

  return (
    <S.Container>
      <TouchableOpacity
        onPress={!handleBack ? () => goBack() : () => handleBack()}
      >
        <CaretLeft size={22} weight="bold" />
      </TouchableOpacity>

      <S.Title>{name}</S.Title>

      {handleAddFavorite ? (
        <TouchableOpacity onPress={handleAddFavorite}>
          <Heart
            size={28}
            weight={isFavorite ? 'fill' : 'bold'}
            color={isFavorite ? colors.error : colors.black}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </S.Container>
  );
}
