import { View, FlatList, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';

export default function About() {
  const commands = [
    'npx create-expo-app@latest .',
    'npm run reset-project',
    'expo start',
    'expo build:ios',
    'expo build:android',
  ];
  const caracteristicas = [
    {
      title: 'Rendimiento nativo:',
      description: 'React Native utiliza componentes y API nativos lo que garantiza que las aplicaciones creadas con él funcionen tan bien como las aplicaciones creadas con las herramientas de la plataforma nativa.',
    },
    {
      title: 'Desarrollo multiplataforma:',
      description: 'con React Native, los desarrolladores pueden escribir código una vez e implementarlo en plataformas iOS y Android, ahorrando tiempo y recursos.',
    },
    {
      title: 'Componentes reutilizables:',
      description: 'React Native proporciona un conjunto de componentes reutilizables prediseñados que se pueden personalizar fácilmente para adaptarse a las necesidades de la aplicación.',
    },
    {
      title: 'Recarga en vivo:',
      description: 'React Native admite la recarga en vivo, lo que permite a los desarrolladores ver cambios en la aplicación instantáneamente sin tener que reconstruir toda la aplicación.',
    },
    {
      title: 'Gran comunidad:',
      description: 'React Native tiene una comunidad grande y activa de desarrolladores que contribuyen a su crecimiento y brindan soporte a través de varios canales, como Stack Overflow, GitHub y la documentación oficial.',
    },
    {
      title: 'Sintaxis declarativa:',
      description: 'React Native utiliza una sintaxis declarativa, lo que hace que sea más fácil comprender y mantener la base de código en comparación con la programación imperativa.',
    },
    {
      title: 'Entorno de desarrollo familiar:',
      description: 'React Native utiliza JavaScript y React, que ya son familiares para muchos desarrolladores web, lo que hace que la curva de aprendizaje sea menos pronunciada para aquellos que realizan la transición del desarrollo web al desarrollo móvil.',
    },
    {
      title: 'Flexibilidad:',
      description: 'React Native permite a los desarrolladores integrar código nativo escrito en Objective-C, Swift o Java/Kotlin cuando sea necesario, proporcionando flexibilidad y la capacidad de aprovechar el código existente.',
    },
    {
      title: 'Capacidad de prueba:',
      description: 'las aplicaciones React Native se pueden probar utilizando las mismas herramientas y marcos utilizados para probar aplicaciones React, como Jest y Enzyme.',
    },
    {
      title: 'Ecosistema:',
      description: 'React Native tiene un rico ecosistema de bibliotecas y herramientas de terceros que amplían su funcionalidad y hacen que el desarrollo sea más eficiente.',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>React Native </Text>
        <Image 
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }} 
          style={styles.image} 
        />
        <Text style={styles.description}>
          React Expo es un marco para crear aplicaciones React universales que se ejecutan de forma nativa en iOS, Android y la web. Proporciona un conjunto de herramientas y servicios para simplificar el desarrollo, la implementación y el escalado de aplicaciones React Native.
        </Text>
        
        <Text style={styles.sectionTitle}>Comandos</Text>
        <FlatList
          data={commands}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
    
              <Text style={styles.commandText}>{item}</Text>
            </View>
          )}
          scrollEnabled={false} // Deshabilitar el desplazamiento en FlatList
        />

        <Text style={styles.sectionTitle}>Características y Beneficios </Text>
        <FlatList
          data={caracteristicas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View  style={styles.listItem}>
              <Text style={{  paddingBottom: 15, fontWeight: "bold",  }} >{item.title}</Text>
              <Text style={{  paddingBottom: 15, textAlign: 'justify' }} >{item.description}</Text>
            </View>
          )}
          scrollEnabled={false} // Deshabilitar el desplazamiento en FlatList
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 10,
  },
  title: {
    color: "#000",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  description: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 30,

  },
  
  sectionTitle: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 30,
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
  },
  bullet: {
    fontSize: 24,
    marginRight: 10,
    color: '#007AFF',
  },
  commandText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    }
});