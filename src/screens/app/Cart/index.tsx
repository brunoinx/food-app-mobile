import React, { useEffect, useState, Suspense } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { Trash } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

import { Header } from '@/components/Header';
import { Button } from '@/components/Button';
import { FoodIntoCart } from '@/components/FoodIntoCart';

import { FoodDTO } from '@/dtos/FoodDTO';
import { useCartStore } from '@/store/cart.store';

import InfoIcon from '@/assets/icons/info-swipe.svg';
import CartIcon from '@/assets/icons/empty-cart.svg';

import * as S from './styles';
import { Swipeable } from '@/components/Swipeable';

export function Cart() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [cartState, setCartState] = useState<FoodDTO[]>([]);

  const { cart, addToCart, decrementAmount } = useCartStore();

  useEffect(() => {
    setCartState(cart);
  }, [cart]);

  function handleBackToHomeScreen() {
    navigation.reset({ index: 0, routes: [{ name: 'HomeTabs' }] });
  }

  return (
    <S.Container>
      <S.WrapperScreen>
        <Header name="Carrinho" handleBack={handleBackToHomeScreen} />
      </S.WrapperScreen>

      <Suspense fallback={<ActivityIndicator size="large" color="black" />}>
        <FlatList
          data={cartState}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <>
              <Swipeable>
                <S.WrapperItem>
                  <FoodIntoCart
                    data={item}
                    increment={() => addToCart(item)}
                    decrement={() => decrementAmount(item)}
                  />
                </S.WrapperItem>
              </Swipeable>

              <S.IconContainer onPress={() => console.log('oi')}>
                <Trash color={colors.white} weight="bold" size={26} />
              </S.IconContainer>
            </>
          )}
          style={{ marginTop: 50 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 40 }}
          ListHeaderComponent={
            cartState.length !== 0 && (
              <S.WrapperInfo>
                <InfoIcon />
                <S.Info>
                  Arraste o item para a direita deletá-lo do carrinho
                </S.Info>
              </S.WrapperInfo>
            )
          }
          ListEmptyComponent={
            <S.EmptyWrapper>
              <CartIcon />

              <S.EmptyTitle>Carrinho vazio</S.EmptyTitle>
              <S.EmptyDescription>
                Clique no botão abaixo para retornar a página e selecionar um
                pedido
              </S.EmptyDescription>
            </S.EmptyWrapper>
          }
        />
      </Suspense>

      <S.WrapperScreen>
        {cartState.length === 0 ? (
          <Button
            name="Voltar a página principal"
            style={{ marginVertical: 20 }}
            onPress={handleBackToHomeScreen}
          />
        ) : (
          <Button
            name="Finalizar Pedido"
            style={{ marginVertical: 20 }}
            // onPress={() => {}}
          />
        )}
      </S.WrapperScreen>
    </S.Container>
  );
}
