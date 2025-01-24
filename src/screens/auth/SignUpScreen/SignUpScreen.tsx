import React from 'react';
import {Alert} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Button,
  Screen,
  Text,
  FormPasswordInput,
  FormTextInput,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {RootStackParamList} from '@routes';

import {SignUpSchema, signUpSchema} from './signUpSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {handleSubmit, control, formState} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, fullName, password, username}: SignUpSchema) {
    console.log(email, fullName, password, username);
    Alert.alert(
      'Cadastro',
      `Email: ${email} - Nome: ${fullName} - Senha: ${password} - Username: ${username}`,
    );
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description:
        'Agora você já pode fazer login e aproveitar todos os recursos do app',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        placeholder="@"
        label="Seu username"
        boxProps={{marginBottom: 's16'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        placeholder="Nome completo"
        label="Seu nome é completo"
        boxProps={{marginBottom: 's16'}}
        autoCapitalize="words"
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite o seu e-mail"
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Cirar minha conta"
        mt="s48"
      />
    </Screen>
  );
}
