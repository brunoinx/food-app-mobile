import React from 'react';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  House,
  Heart,
  User,
  ClockCounterClockwise,
} from 'phosphor-react-native';

import { StackRoutes } from './stack.routes';
import { RootTabsParamList } from '@/dtos/RootParamsListDTO';

import { Favorites } from '@/screens/Favorites';
import { Profile } from '@/screens/Profile';
import { History } from '@/screens/History';

const { Navigator, Screen } = createBottomTabNavigator<RootTabsParamList>();

export function TabRoutes() {
  const { colors } = useTheme();

  const icons = [
    {
      screen: 'HomeStack',
      icon: House,
    },
    {
      screen: 'Favorites',
      icon: Heart,
    },
    {
      screen: 'Profile',
      icon: User,
    },
    {
      screen: 'History',
      icon: ClockCounterClockwise,
    },
  ];

  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.main[400],
        tabBarInactiveTintColor: colors.zinc[500],
        tabBarStyle: {
          height: 54,
          position: 'absolute',
          bottom: 14,
          backgroundColor: colors.zinc[300],
          elevation: 0,
          border: 'none',
        },
        tabBarIcon: ({ color, focused }) => {
          const { icon: Icon } = icons.find(
            ({ screen }) => screen === route.name,
          );

          return (
            <Icon
              color={color}
              size={30}
              weight={focused ? 'fill' : 'regular'}
            />
          );
        },
      })}
    >
      <Screen name="HomeStack" component={StackRoutes} />
      <Screen name="Favorites" component={Favorites} />
      <Screen name="Profile" component={Profile} />
      <Screen name="History" component={History} />
    </Navigator>
  );
}
