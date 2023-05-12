import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabRoutes } from './tab.routes';
import { AuthStackRoutes } from './stacks/auth.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthStackRoutes />
    </NavigationContainer>
  );
}
