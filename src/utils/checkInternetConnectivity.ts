import * as Network from 'expo-network';

export async function checkInternetConnectivity() {
  const connection = await Network.getNetworkStateAsync();
  return connection.isConnected;
}
