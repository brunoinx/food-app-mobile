import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { AppStackRoutes } from './stacks/app.routes';
import { AuthStackRoutes } from './stacks/auth.routes';

import { userStore, IUser } from '@/store/user.store';

export function Routes() {
  const { user, setUpdateUser } = userStore();

  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(_user: IUser | null) {
    try {
      setUpdateUser(_user);
    } catch (error) {
      console.log(error);
    } finally {
      if (initializing) setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return () => subscriber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {!user ? <AuthStackRoutes /> : <AppStackRoutes />}
    </NavigationContainer>
  );
}
