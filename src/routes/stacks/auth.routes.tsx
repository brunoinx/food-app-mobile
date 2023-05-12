import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootAuthStackParamList } from '@/dtos/RootParamsListDTO';

import { Welcome } from '@/screens/auth/Welcome';
import { Session } from '@/screens/auth/Session';

const { Navigator, Screen } =
  createNativeStackNavigator<RootAuthStackParamList>();

export function AuthStackRoutes() {
  return (
    <Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Session" component={Session} />
    </Navigator>
  );
}
