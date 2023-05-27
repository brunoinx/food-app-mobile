import React from 'react';
import { Minus, Plus } from 'phosphor-react-native';

import * as S from './styles';

interface AmountProps {
  amount: number;
  increment: () => void;
  decrement: () => void;
}

export const AmountButton = ({ amount, increment, decrement }: AmountProps) => {
  return (
    <S.AmountView>
      <S.AmountButton onPress={decrement}>
        <Minus color="white" weight="bold" size={11} />
      </S.AmountButton>

      <S.AmountText>{amount}</S.AmountText>

      <S.AmountButton onPress={increment}>
        <Plus color="white" weight="bold" size={11} />
      </S.AmountButton>
    </S.AmountView>
  );
};
