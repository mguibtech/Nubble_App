import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text style={{color: 'red'}}>Testando componente </Text>
        <Text preset="headingSmall" style={{color: 'red'}}>
          Testando componente{' '}
        </Text>
        <Text
          preset="headingLarge"
          style={{color: 'red', fontFamily: 'Panchang-Light'}}>
          Testando componente{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
