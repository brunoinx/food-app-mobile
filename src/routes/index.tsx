import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { TabRoutes } from './tab.routes';
import { AuthStackRoutes } from './stacks/auth.routes';

import { userStore } from '@/store/user.store';

export function Routes() {
  const { user, setUpdateUser } = userStore();

  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(_user: FirebaseAuthTypes.User) {
    setUpdateUser({
      id: _user.uid,
      name: _user.displayName,
      email: _user.email,
      photoUrl: _user.photoURL,
      phoneNumber: _user.phoneNumber,
    });

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
