import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FoodDTO } from './FoodDTO';

export type RootAuthStackParamList = {
  Welcome: undefined;
  Session: undefined;
};

export type RootAppStackParamList = {
  HomeTabs: undefined;
  FoodDetails: { food: FoodDTO };
};

export type RootTabsParamList = {
  Home: undefined;
  Favorites: undefined;
  Profile: undefined;
  History: undefined;
};

export type NavigationProps = NativeStackScreenProps<
  RootAuthStackParamList & RootAppStackParamList
>;
