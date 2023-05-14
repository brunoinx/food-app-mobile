import React from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

import * as S from './styles';
import { userStore } from '@/store';
import { useToast } from '@/hooks/useToast';

export function Login() {
  const { showToast } = useToast();
  const { setCheckValidUser } = userStore();

  function handleValidUser() {
    setCheckValidUser(true);
  }

  function handleCallToast() {
    showToast({
      title: 'Chamando Todos os Cornos!!',
      description: 'asdhaksdhkajsdh',
      type: 'error',
      duration: 5000,
    });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Container>
        <S.Form>
          <Input
            label="Endereço de Email"
            keyboardType="email-address"
            returnKeyType="next"
          />

          <S.WrapperInput>
            <Input label="Senha" secureTextEntry returnKeyType="done" />
          </S.WrapperInput>

          <TouchableOpacity activeOpacity={0.7}>
            <S.ForgotPassword>Esqueceu sua senha?</S.ForgotPassword>
          </TouchableOpacity>
        </S.Form>

        <Button name="Entrar" onPress={handleCallToast} />
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
