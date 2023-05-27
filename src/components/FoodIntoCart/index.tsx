import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
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

import { CardFoodProps } from '@/store/cart.store';

import theme from '@/styles/theme';
import * as S from './styles';
import { AmountButton } from './AmountButton';

const SCREEN_WIDTH = Dimensions.get('window').width;
const TRANSLATE_X_THRESHOLD = -(SCREEN_WIDTH * 0.26);

type AnimatedGHContext = {
  startX: number;
};

type Props = Omit<CardFoodProps, 'id'>;

interface FoodIntoCartProps extends Props {
  increment: () => void;
  decrement: () => void;
  onDeleteItem: () => void;
}

export function FoodIntoCart({
  name,
  value,
  amount = 1,
  image,
  increment,
  decrement,
  onDeleteItem,
}: FoodIntoCartProps) {
  const translateX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedGHContext
  >({
    onStart: event => {
      translateX.value = event.translationX;
    },
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
    translateX.value = withTiming(-SCREEN_WIDTH, { duration: 300 });

    setTimeout(() => {
      onDeleteItem();
    }, 320);
  }

  return (
    <>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[cardXStyle]}>
          <S.Container>
            <S.FoodImage source={{ uri: image }} resizeMode="contain" />

            <S.GroupInfo>
              <S.Title>{name}</S.Title>
              <S.Value>{value}</S.Value>
            </S.GroupInfo>

            <AmountButton
              amount={amount}
              increment={increment}
              decrement={decrement}
            />
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
