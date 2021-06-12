import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {useDispatch} from 'react-redux';
import {addItem} from '../../store/actions/cartActions';

// List display
export default function ProductItem({product, navigation}) {
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Image
        style={{width: '100%', height: 200}}
        source={{
          uri: product.img,
        }}
      />
      <View style={{padding: 15}}>
        <Text style={{fontFamily: 'OpenSans-Regular', fontSize: 18}}>{product.name}</Text>
        <Text style={{fontFamily: 'OpenSans-Bold'}}>{product.price} €</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity 
          style={[styles.button, {flexDirection: 'row'}]}
          onPress={() => navigation.navigate('Details', {
            product: product
          })} >
          <Text style={{fontFamily: 'OpenSans-Bold',marginRight: 5}}>Voir</Text>
          <FontAwesome name="eye" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => dispatch(addItem(product))}
          style={[styles.button, {flexDirection: 'row', backgroundColor: '#0095ff'}]}
           >
          <Text style={{fontFamily: 'OpenSans-Bold', color: '#fff', marginRight: 15}}>Ajouter au panier</Text>
          <FontAwesome name="shopping-basket" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: '#aaa',
    borderWidth: 3,
    borderRadius: 0
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 15,
    margin: 10,
    borderRadius: 8
  }
});