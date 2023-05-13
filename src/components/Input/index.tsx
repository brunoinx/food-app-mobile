import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps {
  label: string;
}

export function Input({ label, ...rest }: InputProps) {
  const [isFocus, setIsFocus] = useState(false);

  function handleToggleFocus() {
    setIsFocus(prev => !prev);
  }

  return (
    <S.Container>
      <S.Label>{label}</S.Label>

      <S.Input
        focusable={isFocus}
        onFocus={handleToggleFocus}
        onBlur={handleToggleFocus}
        {...rest}
      />
    </S.Container>
  );
}
