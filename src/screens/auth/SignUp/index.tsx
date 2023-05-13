import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

import * as S from './styles';

export function SignUp() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Container>
        <S.Form>
          <S.WrapperInput>
            <Input
              label="Endereço de Email"
              keyboardType="email-address"
              returnKeyType="next"
            />
          </S.WrapperInput>

          <S.WrapperInput>
            <Input label="Senha" secureTextEntry returnKeyType="next" />
          </S.WrapperInput>

          <S.WrapperInput>
            <Input
              label="Confirmar senha"
              secureTextEntry
              returnKeyType="done"
            />
          </S.WrapperInput>
        </S.Form>

        <Button name="Cadastrar" />
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
