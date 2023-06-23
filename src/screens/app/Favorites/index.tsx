import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

import { Header } from '@/components/Header';
import { ListFoods } from '@/templates/ListFoods';
import { FoodDTO } from '@/dtos/FoodDTO';

import * as S from './styles';

export function Favorites() {
  const [foods, setFoods] = useState<FoodDTO[]>([]);

  useFocusEffect(
    useCallback(() => {
      firestore()
        .collection('foods')
        .where('isFavorite', '==', true)
        .get()
        .then(querySnapshot => {
          let listFoods = [];

          querySnapshot.forEach(documentSnapshot => {
            listFoods.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });

          setFoods(listFoods);
        });
    }, []),
  );

  return (
    <S.Container>
      <S.WrapperHeader>
        <Header name="Favoritos" />
      </S.WrapperHeader>

      <ListFoods foods={foods} />
    </S.Container>
  );
}
