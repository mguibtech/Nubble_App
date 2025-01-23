import React from 'react';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {FormTextInput} from '../../../components/Form/FormTextIinput';

type LoginFormType = {
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {handleSubmit, control, formState} = useForm<LoginFormType>({
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

  function submitForm({email, password}: LoginFormType) {
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
        rules={{
          required: 'E-mail é obrigatório',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'E-mail inválido',
          },
        }}
        label="E-mail"
        placeholder="Digite o seu e-mail"
      />

      <FormPasswordInput
        control={control}
        name="password"
        rules={{
          required: 'Senha é obrigatória',
          minLength: {
            value: 4,
            message: 'Senha deve ter no mínimo 4 caracteres',
          },
        }}
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
        // disabled={!!emailError || password.length <= 4}
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
