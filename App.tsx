import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View>
          <Text preset="headingMedium">Testando componente </Text>

          <Button
            title="Testandoo"
            mb="s10"
            backgroundColor="carrotSecondary"
          />

          <Button loading title="Testando" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
