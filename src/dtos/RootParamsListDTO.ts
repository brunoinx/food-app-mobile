import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootAuthStackParamList = {
  Welcome: undefined;
};

export type RootAppStackParamList = {
  Home: undefined;
};

export type RootTabsParamList = {
  HomeStack: undefined;
  Favorites: undefined;
  Profile: undefined;
  History: undefined;
};

export type NavigationProps = NativeStackScreenProps<RootAppStackParamList>;
