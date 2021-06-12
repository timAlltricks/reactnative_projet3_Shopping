import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {useDispatch} from 'react-redux';
import {addItem} from '../../store/actions/cartActions';

// Details display
export default function Product({ route, navigation }) {
  const { product } = route.params;
  const dispatch = useDispatch()

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: product.name === '' ? 'No title' : product.name,
    });
  }, [navigation, product.name]);
  return (
    <View style={[styles.container, {justifyContent: 'flex-start'}]}>
      <Image
        style={{width: 400, height: 300}}
        source={{
          uri: product.img,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.prix}>{product.price} €</Text>
      </View>
      <TouchableOpacity
          onPress={() => dispatch(addItem(product))} 
          style={[styles.button, {flexDirection: 'row', backgroundColor: '#0095ff'}]} >
          <Text style={{fontFamily: 'OpenSans-Bold',color: '#fff', fontWeight: 'bold', marginRight: 15}}>Ajouter au panier</Text>
          <FontAwesome name="shopping-basket" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 25,
    margin: 10
  },
  prix: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    margin: 10
  },
  description: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    margin: 10,
    textAlign: 'center'
  },
  button: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    padding: 15,
    margin: 10,
    marginBottom: 35,
    borderRadius: 8
  }
});