import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { FoodDTO } from '@/dtos/FoodDTO';

import * as S from './styles';

export type FoodProps = Pick<FoodDTO, 'name' | 'value' | 'images'> &
  TouchableOpacityProps;

export function CardFood({ name, value, images, ...rest }: FoodProps) {
  return (
    <S.Container activeOpacity={0.7} {...rest}>
      <S.ShadowView>
        <S.Box>
          <S.FoodImage source={{ uri: images[0] }} resizeMode="contain" />

          <S.Name>{name}</S.Name>

          <S.ValueText>{value}</S.ValueText>
        </S.Box>
      </S.ShadowView>
    </S.Container>
  );
}
