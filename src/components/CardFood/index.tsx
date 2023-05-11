import React from 'react';

import { FoodDTO } from '@/dtos/FoodDTO';

import * as S from './styles';

export type FoodProps = Omit<FoodDTO, 'id' | 'description'>;

export function CardFood({ name, value, image }: FoodProps) {
  return (
    <S.Container>
      <S.Box>
        <S.FoodImage source={{ uri: image }} resizeMode="contain" />

        <S.Name>{name}</S.Name>

        <S.ValueText>{value}</S.ValueText>
      </S.Box>
    </S.Container>
  );
}
