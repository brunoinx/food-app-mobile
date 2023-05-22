import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { FoodDTO } from '@/dtos/FoodDTO';
import { NavigationProps } from '@/dtos/RootParamsListDTO';

import { Header } from '@/components/Header';
import { Button } from '@/components/Button';
import { CustomCarousel } from '@/components/CustomCarousel';

import * as S from './styles';

interface RouteProps {
  food: FoodDTO;
}

export function FoodDetails({ route }: NavigationProps) {
  const { food } = route.params as RouteProps;

  const [isFavorite, setIsFavorite] = useState(food.isFavorite);

  function handleFavoriteFood() {
    firestore()
      .collection('foods')
      .doc(food.id)
      .update({ isFavorite: !isFavorite });

    setIsFavorite(prev => !prev);
  }

  return (
    <S.Container>
      <S.WrapperHeader>
        <Header
          isFavorite={isFavorite}
          handleAddFavorite={handleFavoriteFood}
        />
      </S.WrapperHeader>

      <S.WrapperCarousel>
        <CustomCarousel data={food.images} />
      </S.WrapperCarousel>

      <S.FoodName>{food.name}</S.FoodName>
      <S.Value>{food.value}</S.Value>

      <S.WrapperInfo>
        <S.InfoTitle>Informações do pedido: </S.InfoTitle>

        <S.InfoDescription>{food.description}</S.InfoDescription>
      </S.WrapperInfo>

      <S.WrapperButton>
        <Button name="Adicionar ao carrinho" />
      </S.WrapperButton>
    </S.Container>
  );
}
