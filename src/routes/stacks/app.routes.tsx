import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootAppStackParamList } from '@/dtos/RootParamsListDTO';

import { Home } from '@/screens/app/Home';

const { Navigator, Screen } =
  createNativeStackNavigator<RootAppStackParamList>();

export function AppStackRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
