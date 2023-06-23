import React, { useState } from 'react';
import { Image, View, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const WIDTH = Dimensions.get('window').width;

import * as S from './styles';

interface CarouselProps {
  data: string[];
}

export function CustomCarousel({ data }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Carousel
        data={data}
        renderItem={Item}
        width={WIDTH}
        onSnapToItem={index => setActiveIndex(index)}
        loop={data.length >= 2}
      />

      <S.DotsContainer>
        {data.map((_, index) => (
          <S.Dots key={index} active={activeIndex === index} />
        ))}
      </S.DotsContainer>
    </>
  );
}

interface CarouselRenderItem<itemT> {
  item: itemT;
  index: number;
}

function Item({ item }: CarouselRenderItem<string>) {
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <Image
        source={{ uri: item }}
        style={{ width: 320, height: 200, borderRadius: 8 }}
        resizeMode="contain"
      />
    </View>
  );
}
