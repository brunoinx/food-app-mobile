import React, { useState } from 'react';
import { Image, View, Dimensions, LogBox } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useTheme } from 'styled-components';

const WIDTH = Dimensions.get('window').width;

interface CarouselProps {
  data: string[];
}

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the 'deprecated-react-native-prop-types' package.",
]);

export function CustomCarousel({ data }: CarouselProps) {
  const { colors } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Carousel
        data={data}
        renderItem={Item}
        itemWidth={240}
        sliderWidth={WIDTH}
        onSnapToItem={index => setActiveIndex(index)}
      />

      <Pagination
        activeDotIndex={activeIndex}
        dotsLength={data.length}
        dotColor={colors.main[400]}
        inactiveDotColor={colors.zinc[600]}
        dotStyle={{
          width: 9,
          height: 9,
          borderRadius: 5,
          marginHorizontal: 2,
        }}
        inactiveDotScale={0.8}
      />
    </>
  );
}

interface ItemProps<T> {
  item: T;
  index: number;
}

function Item({ item }: ItemProps<string>) {
  return (
    <View>
      <Image
        source={{ uri: item }}
        style={{ width: 200, height: 200, borderRadius: 50 }}
        resizeMode="contain"
      />
    </View>
  );
}
