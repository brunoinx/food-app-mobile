import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CaretLeft, Heart } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import { useTheme } from 'styled-components';

interface HeaderProps {
  isFavorite?: boolean;
  handleAddFavorite?: () => void;
}

export function Header({ isFavorite = false, handleAddFavorite }: HeaderProps) {
  const { goBack } = useNavigation();
  const { colors } = useTheme();

  return (
    <S.Container>
      <TouchableOpacity onPress={() => goBack()}>
        <CaretLeft size={28} weight="bold" />
      </TouchableOpacity>

      {handleAddFavorite && (
        <TouchableOpacity onPress={handleAddFavorite}>
          <Heart
            size={28}
            weight={isFavorite ? 'fill' : 'bold'}
            color={isFavorite ? colors.error : colors.black}
          />
        </TouchableOpacity>
      )}
    </S.Container>
  );
}
