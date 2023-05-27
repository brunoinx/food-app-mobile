import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { FoodDTO } from '@/dtos/FoodDTO';
import { NavigationProps } from '@/dtos/RootParamsListDTO';

import { Header } from '@/components/Header';
import { Button } from '@/components/Button';
import { CustomCarousel } from '@/components/CustomCarousel';

import { setMaskMoney } from '@/utils/setMaskMoney';
import { useCartStore } from '@/store/cart.store';

import * as S from './styles';

interface RouteProps {
  food: FoodDTO;
}

export function FoodDetails({ route, navigation }: NavigationProps) {
  const addToCart = useCartStore(state => state.addToCart);
  const { food } = route.params as RouteProps;
  const foodMaskedValue = setMaskMoney(food.value);

  const [isLoading, setIsLoading] = useState(false);

  const [isFavorite, setIsFavorite] = useState(food.isFavorite);

  function handleFavoriteFood() {
    firestore()
      .collection('foods')
      .doc(food.id)
      .update({ isFavorite: !isFavorite });

    setIsFavorite(prev => !prev);
  }

  function handleAddFoodIntoCart() {
    try {
      setIsLoading(true);

      addToCart({
        ...food,
        amount: 1,
        image: food.images[0],
      });
      navigation.navigate('Cart');
    } finally {
      setIsLoading(false);
    }
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
      <S.Value>{foodMaskedValue}</S.Value>

      <S.WrapperInfo>
        <S.InfoTitle>Informações do pedido: </S.InfoTitle>

        <S.InfoDescription>{food.description}</S.InfoDescription>
      </S.WrapperInfo>

      <S.WrapperButton>
        <Button
          name="Adicionar ao carrinho"
          loading={isLoading}
          onPress={handleAddFoodIntoCart}
        />
      </S.WrapperButton>
    </S.Container>
  );
}
