import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabRoutes } from './tab.routes';
import { AuthStackRoutes } from './stacks/auth.routes';
import { userStore } from '@/store';

export function Routes() {
  const { userIsValid } = userStore();

  return (
    <NavigationContainer>
      {userIsValid ? <TabRoutes /> : <AuthStackRoutes />}
    </NavigationContainer>
  );
}
