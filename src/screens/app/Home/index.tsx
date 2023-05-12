import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import * as S from './styles';

import Menu from '@/assets/icons/menu.svg';
import Cart from '@/assets/icons/cart.svg';

import { CardFood } from '@/components/CardFood';
import { SearchInput } from '@/components/SearchInput';

import { FoodDTO } from '@/dtos/FoodDTO';

export function Home() {
  const [foods, setFoods] = useState<FoodDTO[]>([]);

  useEffect(() => {
    async function fetchFoods() {
      try {
        const response = await fetch(
          'http://192.168.100.23:3000/foods?_start=0&_end=6',
        );
        const data = await response.json();

        setFoods(data);
      } catch (error) {
        console.log('Ocorreu um erro:', error);
      }
    }

    fetchFoods();
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
                  image={item.image}
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
