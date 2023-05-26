import React from 'react';
import { Plus, Minus } from 'phosphor-react-native';

import { FoodDTO } from '@/dtos/FoodDTO';

import * as S from './styles';

type CustomProps = Omit<FoodDTO, 'id' | 'isFavorite' | 'description'>;

interface FoodIntoCartProps {
  data: CustomProps;
  increment: () => void;
  decrement: () => void;
}

export function FoodIntoCart({
  data,
  increment,
  decrement,
}: FoodIntoCartProps) {
  return (
    <S.Container>
      <S.FoodImage source={{ uri: data.images[0] }} resizeMode="contain" />

      <S.GroupInfo>
        <S.Title>{data.name}</S.Title>
        <S.Value>{data.value}</S.Value>
      </S.GroupInfo>

      <S.AmountView>
        <S.AmountButton onPress={decrement}>
          <Minus color="white" weight="bold" size={11} />
        </S.AmountButton>

        <S.AmountText>{data.amount}</S.AmountText>

        <S.AmountButton onPress={increment}>
          <Plus color="white" weight="bold" size={11} />
        </S.AmountButton>
      </S.AmountView>
    </S.Container>
  );
}
