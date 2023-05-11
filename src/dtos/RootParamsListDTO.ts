import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  // Welcome: undefined;
  Home: undefined;
};

export type RootTabsParamList = {
  HomeStack: undefined;
  Favorites: undefined;
  Profile: undefined;
  History: undefined;
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;
