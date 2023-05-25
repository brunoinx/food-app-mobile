import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

import * as S from './styles';

import Menu from '@/assets/icons/menu.svg';
import Cart from '@/assets/icons/cart.svg';

import { CardFood } from '@/components/CardFood';
import { SearchInput } from '@/components/SearchInput';

import { FoodDTO } from '@/dtos/FoodDTO';
import { NavigationProps } from '@/dtos/RootParamsListDTO';

export function Home({ navigation }: NavigationProps) {
  const [foods, setFoods] = useState<FoodDTO[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('foods')
      .limit(6)
      .onSnapshot(querySnapshot => {
        let listFoods = [];

        querySnapshot.forEach(documentSnapshot => {
          listFoods.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });

        setFoods(listFoods);
      });

    return () => subscriber();
  }, []);

  function handleOpenDetailsFood(foodDetails: FoodDTO) {
    navigation.navigate('FoodDetails', { food: foodDetails });
  }

  function handleOpenCart() {
    navigation.navigate('Cart');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Container>
        <S.WrapperHeading>
          <S.Header>
            <TouchableOpacity>
              <Menu />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpenCart}>
              <Cart />
            </TouchableOpacity>
          </S.Header>

          <S.Title>
            Delicious {'\n'}
            food for you
          </S.Title>

          <SearchInput />
        </S.WrapperHeading>

        <S.WrapperList>
          <FlatList
            data={foods}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <S.WrapperCard>
                <CardFood
                  key={item.id}
                  name={item.name}
                  value={item.value}
                  images={item.images}
                  onPress={() => handleOpenDetailsFood(item)}
                />
              </S.WrapperCard>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 64,
              paddingLeft: 32,
            }}
          />
        </S.WrapperList>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
