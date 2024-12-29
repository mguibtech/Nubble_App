import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Box} from './src/components/Box/Box';

import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text marginBottom="s8" preset="headingLarge">
            Ola
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>
          <Box mb="s20">
            <TextInput label="E-mail" placeholder="Digite o seu e-mail" />
          </Box>
          <Box mb="s20">
            <TextInput label="Senha" placeholder="Digite sua senha" />
          </Box>
          <Text color="primary" preset="paragraphSmall" bold>
            Esqueci minha senha
          </Text>

          <Button title="Entrar" mt="s48" />
          <Button title="Criar uma conta" preset="outline" mt="s12" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
