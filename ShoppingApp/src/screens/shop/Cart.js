import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { deleteItem } from '../../store/actions/cartActions';

const {width, height} = Dimensions.get('window');

function calcTotal(products){
  var total = 0;
  products.forEach(element => {
    total += element.price * element.qtty
  });
  return Math.round(total *100)/100
}

export default function Cart() {
  const dispatch = useDispatch();
  const store = useSelector(store => store)

  const renderItem = ({ item }) => (
    <View style={{width: width, flexDirection: 'row', justifyContent: 'space-between', padding: 10, 
    borderStyle: 'solid', borderBottomWidth: 1, borderColor: "#aaa"}}>
      <Text style={styles.qtty}>{item.qtty}</Text>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.prix}>{Math.round(item.price * item.qtty * 100)/100} €</Text>
      <TouchableOpacity
      onPress={() => dispatch(deleteItem(item))}>
        <AntDesign name="minuscircleo" size={24} color="red" />
      </TouchableOpacity>
    </View>);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList data={store.products} renderItem={renderItem} keyExtractor={item => item.id} />
      </SafeAreaView>
      <View style={{backgroundColor: '#0057ff', padding: 10, margin: 15, borderRadius: 7}}>
        <Text style={[styles.title, {color: '#fff'}]}>Total : {calcTotal(store.products)} €</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20
  },
  prix: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20
  },
  qtty: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20
  }
});