import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

export interface InputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
}

export function Input({ label, errorMessage, ...rest }: InputProps) {
  return (
    <>
      <S.Container hasError={!!errorMessage}>
        <S.Label>{label}</S.Label>

        <S.Input {...rest} />
      </S.Container>

      <S.ErrorText>{errorMessage}</S.ErrorText>
    </>
  );
}
