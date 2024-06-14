// CatalogScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CatalogoScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Aquí puedes realizar una llamada a la API para obtener los productos del catálogo
    
    fetch('https://api.example.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text>{item.name}</Text>
      <Text>Precio: ${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Productos y Servicios</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CatalogoScreen;
