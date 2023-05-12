import React from 'react';

import LogoSvg from '@/assets/logo.svg';

import * as S from './styles';
import { AuthTabsRoutes } from '@/routes/topTabs/authTabs.routes';

export function Session() {
  return (
    <S.Container>
      <S.HeaderBox>
        <S.WrapperImage>
          <LogoSvg height={130} width={120} />
        </S.WrapperImage>
      </S.HeaderBox>

      <S.WrapperTabs>
        <AuthTabsRoutes />
      </S.WrapperTabs>
    </S.Container>
  );
}
