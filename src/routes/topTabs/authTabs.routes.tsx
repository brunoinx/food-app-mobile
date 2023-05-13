import React from 'react';
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Login } from '@/screens/auth/Login';
import { SignUp } from '@/screens/auth/SignUp';
import { useTheme } from 'styled-components';

const { width } = Dimensions.get('window');

const Tab = createMaterialTopTabNavigator();

export function AuthTabsRoutes() {
  const { colors, fonts } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Login"
      backBehavior="none"
      screenOptions={{
        swipeEnabled: true,
        tabBarAndroidRipple: { borderless: false },
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: colors.main[400],
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: {
          width: width,
          marginLeft: 26,
          paddingLeft: 28,
          elevation: 0,
          backgroundColor: 'transparent',
        },
        tabBarItemStyle: { width: 120 },
        tabBarLabelStyle: {
          fontSize: 17,
          fontFamily: fonts.inter[600],
          textTransform: 'none',
        },
        tabBarIndicatorContainerStyle: {
          marginLeft: 32,
        },
        tabBarIndicatorStyle: {
          width: 110,
          height: 4,
          borderRadius: 2,
          backgroundColor: colors.main[400],
        },
        tabBarGap: 40,
      }}
    >
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: 'Sign-up' }}
      />
    </Tab.Navigator>
  );
}
