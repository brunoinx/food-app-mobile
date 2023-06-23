import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

import { FoodDTO } from '@/dtos/FoodDTO';

import { CardFood } from '@/components/CardFood';

interface IListFoods {
  foods: FoodDTO[];
}

export function ListFoods({ foods }: IListFoods) {
  const navigation = useNavigation();

  function handleOpenDetailsFood(foodDetails: FoodDTO) {
    navigation.navigate('FoodDetails', { food: foodDetails });
  }

  return (
    <FlatList
      data={foods}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <CardFood
          name={item.name}
          value={item.value}
          images={item.images}
          onPress={() => handleOpenDetailsFood(item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 90,
        paddingHorizontal: 32,
      }}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      numColumns={2}
    />
  );
}
