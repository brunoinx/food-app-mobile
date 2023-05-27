import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Plus, Minus } from 'phosphor-react-native';
import { Trash } from 'phosphor-react-native';

import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  RectButton,
} from 'react-native-gesture-handler';

import { FoodDTO } from '@/dtos/FoodDTO';
import * as S from './styles';
import theme from '@/styles/theme';

const SCREEN_WIDTH = Dimensions.get('window').width;
const TRANSLATE_X_THRESHOLD = -(SCREEN_WIDTH * 0.26);

type CustomProps = Omit<FoodDTO, 'id' | 'isFavorite' | 'description'>;

interface FoodIntoCartProps {
  data: CustomProps;
  increment: () => void;
  decrement: () => void;
  onDeleteItem: () => void;
}

export function FoodIntoCart({
  data,
  increment,
  decrement,
  onDeleteItem,
}: FoodIntoCartProps) {
  const translateX = useSharedValue(0);

  const gestureHandler =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onActive: event => {
        translateX.value = event.translationX;
      },
      onEnd: () => {
        const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;

        if (shouldBeDismissed) {
          translateX.value = withTiming(TRANSLATE_X_THRESHOLD);
        } else {
          translateX.value = withTiming(0);
        }
      },
    });

  const cardXStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const iconStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value <= TRANSLATE_X_THRESHOLD ? 1 : 0,
    );

    return { opacity };
  });

  function dispatchAnimationDelete() {
    try {
      translateX.value = withTiming(-SCREEN_WIDTH);
    } finally {
      onDeleteItem();
    }
  }

  return (
    <>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[cardXStyle]}>
          <S.Container>
            <S.FoodImage
              source={{ uri: data.images[0] }}
              resizeMode="contain"
            />

            <S.GroupInfo>
              <S.Title>{data.name}</S.Title>
              <S.Value>{data.value}</S.Value>
            </S.GroupInfo>

            <S.AmountView>
              <S.AmountButton onPress={decrement}>
                <Minus color="white" weight="bold" size={11} />
              </S.AmountButton>

              <S.AmountText>{data.amount}</S.AmountText>

              <S.AmountButton onPress={increment}>
                <Plus color="white" weight="bold" size={11} />
              </S.AmountButton>
            </S.AmountView>
          </S.Container>
        </Animated.View>
      </PanGestureHandler>

      <Animated.View style={[styles.containerButton, iconStyle]}>
        <RectButton style={styles.button} onPress={dispatchAnimationDelete}>
          <Trash color={theme.colors.white} weight="bold" size={26} />
        </RectButton>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    height: 62,
    width: 62,

    position: 'absolute',
    right: '6%',
    top: '22%',
    zIndex: -10,
  },
  button: {
    height: 62,
    width: 62,
    borderRadius: 31,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.error,
  },
});
