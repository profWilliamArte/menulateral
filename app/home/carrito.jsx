import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from "@/constants/Colors";

export default function Carrito() {
  const currentColors = Colors.dark;

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <Text style={styles.title}>Carrito de Compras</Text>
      <Text style={styles.description}>Aquí puedes ver los productos que has agregado a tu carrito.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center', // Alinea el contenido al centro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Puedes ajustar el color según tu tema
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#bdc3c7', // Puedes ajustar el color según tu tema
    textAlign: 'center',
  },
});