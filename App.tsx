import 'react-native-gesture-handler';
import React from 'react'
import { PageProvider } from './src/context/NumberContext';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <PageProvider>
      { children }
    </PageProvider>
  )
}

export default App