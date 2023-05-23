import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootAppStackParamList } from '@/dtos/RootParamsListDTO';

import { TabRoutes } from '../tab.routes';
import { FoodDetails } from '@/screens/app/FoodDetails';
import { Cart } from '@/screens/app/Cart';

const { Navigator, Screen } =
  createNativeStackNavigator<RootAppStackParamList>();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="HomeTabs"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="HomeTabs" component={TabRoutes} />
      <Screen name="FoodDetails" component={FoodDetails} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
}
