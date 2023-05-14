import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { TabRoutes } from './tab.routes';
import { AuthStackRoutes } from './stacks/auth.routes';

import { userStore } from '@/store';

export function Routes() {
  const { userIsValid } = userStore();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {!user ? <AuthStackRoutes /> : <TabRoutes />}
    </NavigationContainer>
  );
}
