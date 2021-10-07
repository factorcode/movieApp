import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeBaseProvider } from 'native-base'
import AppStack from './src/components/stacks/AppStack'

export default function App() {
  console.disableYellowBox = true;
  return (
    <NativeBaseProvider>
      <AppStack />
      <StatusBar style='light' />
    </NativeBaseProvider>
  );
}

