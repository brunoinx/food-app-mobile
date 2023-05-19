import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/Button';
import { ControlledTextInput } from '@/components/_controllers/ControlledTextInput';

import { useToast } from '@/hooks/useToast';
import { userStore } from '@/store/user.store';

import * as S from './styles';
import { verifyErrorFirebase } from '@/utils/verifyErrorFirebase';

const validationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Endereço de email é obrigatório' })
    .email({
      message: 'Digite um email válido',
    }),
  password: z
    .string()
    .min(6, { message: 'Precisa ter no mínimo 6 caracteres' }),
});

type LoginSchema = z.infer<typeof validationSchema>;

export function Login() {
  const { setUpdateUser } = userStore();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async data => {
    try {
      setLoading(true);
      const { user } = await auth().signInWithEmailAndPassword(
        data.email,
        data.password,
      );

      setUpdateUser({
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        phoneNumber: user.phoneNumber,
      });

      showToast({
        title: 'Tudo certo!',
        description: 'Login realizado com sucesso.',
      });
    } catch (error) {
      let errorMessage = verifyErrorFirebase(error.code);

      if (errorMessage === null) {
        errorMessage = error.message;
      }

      showToast({
        title: 'Ops!',
        description: errorMessage,
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Container>
        <S.Form>
          <ControlledTextInput
            control={control}
            name="email"
            label="Endereço de email"
            returnKeyType="next"
            keyboardType="email-address"
            rules={{ required: 'Endereço de email é obrigatório' }}
            errorMessage={errors.email?.message}
          />

          <S.WrapperInput>
            <ControlledTextInput
              control={control}
              name="password"
              label="Senha"
              secureTextEntry
              returnKeyType="done"
              errorMessage={errors.password?.message}
              focusable
            />
          </S.WrapperInput>

          <TouchableOpacity activeOpacity={0.7}>
            <S.ForgotPassword>Esqueceu sua senha?</S.ForgotPassword>
          </TouchableOpacity>
        </S.Form>

        <Button
          name="Entrar"
          loading={loading}
          onPress={handleSubmit(onSubmit)}
        />
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
