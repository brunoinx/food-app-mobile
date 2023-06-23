import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import * as S from './styles';

import Menu from '@/assets/icons/menu.svg';
import Cart from '@/assets/icons/cart.svg';

import { CardFood } from '@/components/CardFood';
import { SearchInput } from '@/components/SearchInput';

import { useToast } from '@/hooks/useToast';
import { FoodDTO } from '@/dtos/FoodDTO';
import { NavigationProps } from '@/dtos/RootParamsListDTO';
import { userStore } from '@/store/user.store';

export function Home({ navigation }: NavigationProps) {
  const { setUpdateUser } = userStore();
  const { showToast } = useToast();
  const [foods, setFoods] = useState<FoodDTO[]>([]);

  useEffect(() => {
    try {
      const subscriber = firestore()
        .collection('foods')
        .limit(6)
        .onSnapshot(querySnapshot => {
          let listFoods = [];

          if (querySnapshot === null) {
            setFoods([]);
            return;
          }

          querySnapshot.forEach(documentSnapshot => {
            listFoods.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });

          setFoods(listFoods);
        });
      return () => subscriber();
    } catch (error) {
      console.log(error);
    }
  }, []);

  function handleSignOut() {
    auth()
      .signOut()
      .then(() => {
        showToast({
          title: 'OK',
          description: 'Você foi deslogado com sucesso!',
        });

        setUpdateUser(null);
      });
  }

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
            <TouchableOpacity onPress={handleSignOut}>
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
