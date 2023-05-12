import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { FoodDTO } from '@/dtos/FoodDTO';

import * as S from './styles';

export type FoodProps = Omit<FoodDTO, 'id' | 'description'> &
  TouchableOpacityProps;

export function CardFood({ name, value, image, ...rest }: FoodProps) {
  return (
    <S.Container activeOpacity={0.7} {...rest}>
      <S.ShadowView>
        <S.Box>
          <S.FoodImage source={{ uri: image }} resizeMode="contain" />

          <S.Name>{name}</S.Name>

          <S.ValueText>{value}</S.ValueText>
        </S.Box>
      </S.ShadowView>
    </S.Container>
  );
}
