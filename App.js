// App.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './componets/LoginScreen';
import CatalogoScreen from './componets/CatalogoScreen';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Renderizar LoginScreen por defecto */}
      <LoginScreen />
      {/* Renderizar CatalogScreen cuando se necesite */}
      {/* <CatalogScreen /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
