import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsOverview from './user/ProductsOverview';
import Product from './shop/Product';
import Cart from './shop/Cart';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function Navigator() {
  
  const headericon = (navigation) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}>
        <FontAwesome name="shopping-basket" size={18} color="#000" style={{marginRight: 15}} />
    </TouchableOpacity>
  )
  
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={({ navigation }) => ({headerRight: () => (headericon(navigation)), headerTitleStyle: {fontFamily: 'OpenSans-Bold'}})}>
        <Stack.Screen name="Home" component={ProductsOverview} />
        <Stack.Screen name="Details" component={Product} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});