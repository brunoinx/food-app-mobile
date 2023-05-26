import React from 'react';
import { Dimensions } from 'react-native';

import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

interface SwipeableProps {
  children: React.ReactNode;
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const TRANSLATE_X_THRESHOLD = -(SCREEN_WIDTH * 0.26);

export function Swipeable({ children }: SwipeableProps) {
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

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[cardXStyle]}>{children}</Animated.View>
    </PanGestureHandler>
  );
}
