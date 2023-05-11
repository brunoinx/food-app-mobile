import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@/screens/Home';
// import { Welcome } from '@/screens/Welcome';
import { RootStackParamList } from '@/dtos/RootParamsListDTO';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      {/* <Screen name="Welcome" component={Welcome} /> */}
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
