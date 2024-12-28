import React from 'react';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {Box} from '../Box/Box';
import {ActivityIndicator} from 'react-native';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading}: ButtonProps) {
  return (
    <Box
      backgroundColor="buttonPrimary"
      paddingHorizontal="s10"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      //   style={{
      //     paddingHorizontal: 20,
      //     paddingVertical: 14,
      //     backgroundColor: colors.carrotSecondary,
      //     alignItems: 'center',
      //     borderRadius: 16,
      //   }}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{color: '#fff'}}>
          {title}
        </Text>
      )}
    </Box>
  );
}
