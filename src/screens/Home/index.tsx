import React from 'react';
import { TouchableOpacity } from 'react-native';

import * as S from './styles';

import Menu from '@/assets/icons/menu.svg';
import Cart from '@/assets/icons/cart.svg';
import { SearchInput } from '@/components/SearchInput';

export function Home() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <TouchableOpacity>
            <Menu />
          </TouchableOpacity>
          <TouchableOpacity>
            <Cart />
          </TouchableOpacity>
        </S.Header>
      </S.Wrapper>

      <S.Title>
        Delicious {'\n'}
        food for you
      </S.Title>

      <S.Wrapper>
        <SearchInput />
      </S.Wrapper>
    </S.Container>
  );
}
