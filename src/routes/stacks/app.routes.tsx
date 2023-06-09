import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootAppStackParamList } from '@/dtos/RootParamsListDTO';

import { TabRoutes } from '../tab.routes';
import { Cart } from '@/screens/app/Cart';
import { FoodDetails } from '@/screens/app/FoodDetails';
import { NetworkInfo } from '@/screens/app/NetworkInfo';
import { checkInternetConnectivity } from '@/utils/checkInternetConnectivity';

const { Navigator, Screen } =
  createNativeStackNavigator<RootAppStackParamList>();

export function AppStackRoutes() {
  const navigation = useNavigation();

  useEffect(() => {
    checkInternetConnectivity().then(isNetworkConnected => {
      if (!isNetworkConnected) {
        navigation.navigate('NetworkInfo');
      } else {
        navigation.navigate('HomeTabs');
      }
    });
  }, [navigation]);

  return (
    <Navigator
      initialRouteName={'HomeTabs'}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="HomeTabs" component={TabRoutes} />
      <Screen name="FoodDetails" component={FoodDetails} />
      <Screen name="Cart" component={Cart} />
      <Screen name="NetworkInfo" component={NetworkInfo} />
    </Navigator>
  );
}
