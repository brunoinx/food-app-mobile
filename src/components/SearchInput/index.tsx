import React from 'react';
import { Feather } from '@expo/vector-icons';

import * as S from './styles';

export function SearchInput() {
  return (
    <S.Container>
      <Feather name="search" color="black" size={22} />

      <S.Input />
    </S.Container>
  );
}
