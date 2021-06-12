import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/screens/Navigator';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from './src/store/reducer';

const store = createStore(cartReducer);

export default function App() {
  let [fontsLoaded] = useFonts({
    'OpenSans-Bold': require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans/OpenSans-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigator />
          <StatusBar style='auto' />
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
