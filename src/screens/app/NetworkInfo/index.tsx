import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { WifiSlash } from 'phosphor-react-native';

import { Button } from '@/components/Button';
import { checkInternetConnectivity } from '@/utils/checkInternetConnectivity';

import * as S from './styles';

export function NetworkInfo() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  function handleCheckConnectivity() {
    try {
      setIsLoading(true);
      checkInternetConnectivity().then(isNetworkConnected => {
        if (!isNetworkConnected) {
          navigation.navigate('NetworkInfo');
        } else {
          navigation.navigate('HomeTabs');
        }
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <S.Container>
      <S.Main>
        <WifiSlash size={170} color="#C7C7C7" />

        <S.Title>Sem Conexão com internet</S.Title>
        <S.Description>
          Sua conexão com a Internet não está disponível no momento, verifique
          ou tente novamente.
        </S.Description>

        <Button
          name="Tentar Novamente"
          loading={isLoading}
          onPress={handleCheckConnectivity}
        />
      </S.Main>
    </S.Container>
  );
}
