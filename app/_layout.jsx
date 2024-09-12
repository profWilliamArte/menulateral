import { Stack } from "expo-router";
import { Text, View, Image, StyleSheet } from "react-native";
import { Drawer } from 'expo-router/drawer';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import CustomDrawerContent from '../components/customDrawerContent';

export default function RootLayout() {
  return <Drawer
    screenOptions={{
      drawerLabelStyle: {
        marginLeft: -20,
      },
      drawerActiveBackgroundColor: '#7f8c8d',
      drawerActiveTintColor: 'white',
      drawerInactiveTintColor: '#2c3e50'
    }}
    drawerContent={CustomDrawerContent}

  >

    <Drawer.Screen
      name="index"
      options={{
        drawerLabel: 'Inicio',
        title: 'Inicio',
        drawerIcon: ({ size, color }) => (
          <Entypo name='home' size={size} color={color} />
        )
      }}
    />

   
    <Drawer.Screen
      name="movil"
      options={{
        drawerLabel: 'Movil',
        title: 'Movil',
        drawerIcon: ({ size, color }) => (
          <Entypo name='mobile' size={size} color={color} />
        )

      }}
    />
    <Drawer.Screen
      name="laptop"
      options={{
        drawerLabel: 'Laptop',
        title: 'Laptop',
        drawerIcon: ({ size, color }) => (
          <Entypo name='laptop' size={size} color={color} />
        )

      }}
    />
    <Drawer.Screen
      name="kitchen"
      options={{
        drawerLabel: 'Cocina',
        title: 'Cocina',
        drawerIcon: ({ size, color }) => (
          <FontAwesome6 name='kitchen-set' size={size} color={color} />
        )

      }}
    />
    <Drawer.Screen
      name="fragrances"
      options={{
        drawerLabel: 'Perfumes',
        title: 'Perfumes',
        drawerIcon: ({ size, color }) => (

          <Octicons name="beaker" size={size} color={color} />
        )

      }}
    />
    <Drawer.Screen
      name="watches"
      options={{
        drawerLabel: 'Relojes',
        title: 'Relojes',
        drawerIcon: ({ size, color }) => (

          <Feather name="watch" size={size} color={color} />
        )

      }}
    />
 <Drawer.Screen
      name="home"
      options={{
        drawerLabel: 'Configuración',
        title: 'Configuración',
        drawerIcon: ({ size, color }) => (
          <Entypo name='grid' size={size} color={color} />
        )

      }}
    />

    <Drawer.Screen
      name="detalle/[id]"

      options={{
        drawerLabel: () => null, // No mostrar etiqueta
        title: null, // También puedes establecer el título como null
      }}
    />

  </Drawer>
}
