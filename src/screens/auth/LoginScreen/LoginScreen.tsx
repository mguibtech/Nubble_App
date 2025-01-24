import React from 'react';
import {Alert} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {RootStackParamList} from '@routes';

import {loginSchema, LoginSchema} from './loginSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {handleSubmit, control, formState} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm({email, password}: LoginSchema) {
    Alert.alert('Login', `Email: ${email} - Senha: ${password}`);
  }

  return (
    <Screen scrollable>
      <Text marginBottom="s8" preset="headingLarge">
        Ola
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite o seu e-mail"
        boxProps={{marginBottom: 's16'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        mt="s8"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        disabled={!formState.isValid}
        title="Entrar"
        mt="s48"
        onPress={handleSubmit(submitForm)}
      />
      <Button
        onPress={navigateToSignUpScreen}
        title="Criar uma conta"
        preset="outline"
        mt="s12"
      />
    </Screen>
  );
}
