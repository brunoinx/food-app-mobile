import React, { useEffect, useState, Suspense } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import { Header } from '@/components/Header';
import { Button } from '@/components/Button';
import { FoodIntoCart } from '@/components/FoodIntoCart';

import { FoodDTO } from '@/dtos/FoodDTO';
import { useCartStore } from '@/store/cart.store';

import InfoIcon from '@/assets/icons/info-swipe.svg';
import CartIcon from '@/assets/icons/empty-cart.svg';

import * as S from './styles';

export function Cart() {
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
      <Header name="Carrinho" handleBack={handleBackToHomeScreen} />

      <Suspense fallback={<ActivityIndicator size="large" color="black" />}>
        <FlatList
          data={cartState}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <S.WrapperItem>
              <FoodIntoCart
                name={item.name}
                value={item.value}
                image={item.images[0]}
                amount={item.amount}
                increment={() => addToCart(item)}
                decrement={() => decrementAmount(item)}
              />
            </S.WrapperItem>
          )}
          style={{ marginTop: 50 }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            cartState.length !== 0 && (
              <S.WrapperInfo>
                <InfoIcon />
                <S.Info>Arraste o item para deletá-lo do carrinho</S.Info>
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
    </S.Container>
  );
}
