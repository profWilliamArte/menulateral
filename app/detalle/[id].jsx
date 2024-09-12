import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors } from "@/constants/Colors";
import CustomButton from "../../components/CustomButton";
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
  }, [id]);

  if (loading || !datos) {
    return (
      <View style={styles.loading}>
        <Text style={{ color: currentColors.text }}>Cargando...</Text>
      </View>
    );
  }
  const descuento = (datos.price * datos.discountPercentage) / 100;
  const precioVenta = datos.price - descuento;

  // Formateo de números
  const formatCurrency = (value) => {
    return value.toFixed(2); // Formato a 2 decimales
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: currentColors.background }]}>
      
      <View style={{paddingVertical:10}}>
        <Text style={styles.title}>{datos.title}</Text>
      </View>

      <View >
        <Image source={{ uri: datos.thumbnail }} style={styles.image} />
      </View>
      <View style={{paddingVertical:20, paddingHorizontal:20}}>
          <Text style={styles.texto}>Nombre: {datos.title}</Text>
          <Text style={styles.texto}>SKU: {datos.sku}</Text>
          <Text style={styles.texto}>Categoría: {datos.category}</Text>
          <Text style={styles.texto}>Marca: {datos.brand}</Text>
          <Text style={styles.texto}>Stock: {datos.stock}</Text>
          <Text style={styles.texto}>Calificación: {datos.rating}</Text>
          <View  style={{paddingVertical:20}}>
            <Text style={styles.texto}>Precio: {formatCurrency(datos.price)}$</Text>
            <Text style={styles.texto}>Porcentaje de Descuento: {datos.discountPercentage}%</Text>
            <Text style={styles.texto}>Descuento: {formatCurrency(descuento)}$</Text>
            <Text style={styles.texto}>Precio de Venta: {formatCurrency(precioVenta)}$</Text>
            </View>
            <View style={{paddingVertical:20}}>
              <Text style={styles.texto}>Descripción: </Text>
              <Text style={styles.description}>{datos.description}</Text>
         
          <View style={{paddingVertical:20}}>
            <Text style={{marginTop: 30, color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>Comentarios: </Text>
              {datos.reviews.map((item,index) => (
                <View key={index} style={{marginBottom: 10, backgroundColor: '#2c3e50', padding: 10}}>
                  <Text style={styles.texto}>Calificación: {item.rating}</Text>
                  <Text style={styles.texto}>Comentario: {item.comment}</Text>
                  <Text style={styles.texto}>Fecha: {item.date}</Text>
                  <Text style={styles.texto}>Correo: {item.email}</Text>
              </View>
            ))}
          </View>

      </View>



     
          <TouchableOpacity style={styles.button} onPress={() => router.back()}>
            <Text style={styles.buttonText}>Regresar</Text>
          </TouchableOpacity>
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
  
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    borderRadius: 8
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  texto: {
    fontSize: 20,
    color: '#fff',
    paddingVertical: 5,

  },
  description: {
    fontSize: 16,
    color: '#fff',
    paddingVertical: 5,

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