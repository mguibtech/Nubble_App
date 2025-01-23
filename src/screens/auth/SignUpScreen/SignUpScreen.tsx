import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {Controller, useForm} from 'react-hook-form';
import {Alert} from 'react-native';

type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {handleSubmit, control, formState} = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, fullName, password, username}: SignUpFormType) {
    console.log(email, fullName, password, username);
    Alert.alert(
      'Cadastro',
      `Email: ${email} - Nome: ${fullName} - Senha: ${password} - Username: ${username}`,
    );
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description:
    //     'Agora você já pode fazer login e aproveitar todos os recursos do app',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>

      <Controller
        control={control}
        name="username"
        rules={{
          required: 'Username é obrigatório',
        }}
        render={({field, fieldState}) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            placeholder="@"
            label="Seu username"
            boxProps={{marginBottom: 's16'}}
          />
        )}
      />

      <Controller
        control={control}
        name="fullName"
        rules={{
          required: 'Nome completo é obrigatório',
        }}
        render={({field, fieldState}) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            placeholder="Nome completo"
            label="Seu nome é completo"
            boxProps={{marginBottom: 's16'}}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail é obrigatório',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'E-mail inválido',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            boxProps={{mb: 's20'}}
            value={field.value}
            onChangeText={field.onChange}
            label="E-mail"
            placeholder="Digite o seu e-mail"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha é obrigatória',
          minLength: {
            value: 4,
            message: 'Senha deve ter no mínimo 4 caracteres',
          },
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            label="Senha"
            placeholder="Digite sua senha"
          />
        )}
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
