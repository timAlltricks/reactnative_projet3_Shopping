import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import PRODUCTS from '../../models/products';
import ProductItem from '../shop/ProductItem';

export default function ProductsOverview({ navigation }) {
  const renderItem = ({ item }) => <ProductItem product={item} navigation={navigation} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={PRODUCTS} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});