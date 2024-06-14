import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

// Importa tu imagen (asegúrate de que la ruta sea correcta)
import loginImage from '../assets/images/login-image.png';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Muestra el texto y la imagen */}
      <Text style={styles.title}>Bienvenido</Text>
      <Image source={loginImage} style={styles.image} />
      
      {/* Botón para navegar a la pantalla "Catalogo" */}
      <Button
        title="Ir al Catálogo"
        onPress={() => navigation.navigate('Catalogo')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', // Ajusta la imagen según el tamaño del contenedor
    marginBottom: 20,
  },
});

export default LoginScreen;