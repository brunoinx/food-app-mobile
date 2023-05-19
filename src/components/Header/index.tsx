import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CaretLeft, Heart } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

interface HeaderProps {
  handleAddFavorite?: () => void;
}

export function Header({ handleAddFavorite }: HeaderProps) {
  const { goBack } = useNavigation();

  return (
    <S.Container>
      <TouchableOpacity onPress={() => goBack()}>
        <CaretLeft size={28} weight="bold" />
      </TouchableOpacity>

      {handleAddFavorite && (
        <TouchableOpacity onPress={handleAddFavorite}>
          <Heart size={28} weight="bold" />
        </TouchableOpacity>
      )}
    </S.Container>
  );
}
