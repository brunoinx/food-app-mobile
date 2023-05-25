import React from 'react';
import { Plus, Minus } from 'phosphor-react-native';

import { FoodDTO } from '@/dtos/FoodDTO';

import * as S from './styles';

type CustomProps = Omit<
  FoodDTO,
  'id' | 'isFavorite' | 'description' | 'images'
>;

interface FoodIntoCartProps extends CustomProps {
  image: string;
  increment: () => void;
  decrement: () => void;
}

export function FoodIntoCart({
  name,
  value,
  amount = 1,
  image,
  increment,
  decrement,
}: FoodIntoCartProps) {
  return (
    <S.Container>
      <S.FoodImage source={{ uri: image }} resizeMode="contain" />

      <S.GroupInfo>
        <S.Title>{name}</S.Title>
        <S.Value>{value}</S.Value>
      </S.GroupInfo>

      <S.AmountView>
        <S.AmountButton onPress={decrement}>
          <Minus color="white" weight="bold" size={11} />
        </S.AmountButton>

        <S.AmountText>{amount}</S.AmountText>

        <S.AmountButton onPress={increment}>
          <Plus color="white" weight="bold" size={11} />
        </S.AmountButton>
      </S.AmountView>
    </S.Container>
  );
}
