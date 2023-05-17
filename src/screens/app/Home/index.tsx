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

export function Home() {
  const [foods, setFoods] = useState<FoodDTO[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('foods')
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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Container>
        <S.Wrapper>
          <S.Header>
            <TouchableOpacity>
              <Menu />
            </TouchableOpacity>
            <TouchableOpacity>
              <Cart />
            </TouchableOpacity>
          </S.Header>
        </S.Wrapper>

        <S.Title>
          Delicious {'\n'}
          food for you
        </S.Title>

        <S.Wrapper>
          <SearchInput />
        </S.Wrapper>

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
                />
              </S.WrapperCard>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 64,
            }}
          />
        </S.WrapperList>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
