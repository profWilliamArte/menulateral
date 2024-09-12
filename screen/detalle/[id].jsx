import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors } from "@/constants/Colors";
import CustomButton from "../CustomButton";
const API = 'https://dummyjson.com/products/';

export default function Detalle() {
  const currentColors = Colors.dark;
  const { id } = useLocalSearchParams();
  let URI = API + id;
  const [datos, setDatos] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const getDatos = async () => {
    try {
      const response = await fetch(URI);
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  if (loading || !datos) {
    return (
      <View style={styles.loading}>
        <Text style={{ color: currentColors.text }}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: currentColors.background }]}>

      <View style={styles.card}>
      <Text style={styles.title}>{datos.title}</Text>
        <Image source={{ uri: datos.thumbnail }} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.category}>Categoría: {datos.category}</Text>
          <Text style={styles.price}>Precio: {datos.price}$</Text>
          <Text style={styles.stock}>Stock: {datos.stock}</Text>
          <Text style={styles.rating}>Calificación: {datos.rating}</Text>
          <Text style={styles.description}>{datos.description}</Text>
          
      
          <TouchableOpacity style={styles.button} onPress={() => router.back()}>
            <Text style={styles.buttonText}>Regresar</Text>
          </TouchableOpacity>


        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

    padding: 10,



  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#222f3e',
    borderRadius: 20,
    padding: 20,
    margin: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    width: '100%', // Cambia el ancho a un porcentaje
   
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#fff',
    textAlign: 'center',
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    color: '#fff',
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
    textAlign: 'center',
  },
  stock: {
    fontSize: 16,
    marginBottom: 8,
    color: '#fff',
    textAlign: 'center',
  },
  rating: {
    fontSize: 16,
    marginBottom: 8,
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});