import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import CustomButton from "./CustomButton";
import { useRouter } from 'expo-router';

const Cardprod = ({ item }) => {
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);

    const handlePressDetail = () => {
        router.push(`/detalle/${item.id}`);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={openModal}>
                <View style={styles.header}>
                    <Image source={{ uri: item.thumbnail }} style={styles.image} />
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={[styles.brand, styles.success]}>{item.brand}</Text>
                    <Text style={[styles.price, styles.danger]}>${item.price.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.footer}>
                <CustomButton
                    title="Ver Detalle"
                    onPress={handlePressDetail} // Usa la función de navegación aquí
                    type="danger"
                    outline
                    margin={0}
                    fontSize={14}
                />
            </View>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{item.title}</Text>
                        
                        <Image source={{ uri: item.thumbnail }} style={styles.modalImage} />
                        <Text style={styles.modalTitle}>{item.category}</Text>
                        <Text style={[styles.brand, styles.success]}>{item.brand}</Text>
                        <Text style={[styles.price, styles.danger]}>{item.price}</Text>
                        <Text style={styles.modalDescription}>{item.description}</Text>
                        <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#2c3e50',
        borderRadius: 8,
        padding: 10,
        margin: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        width: '45%', // Cambia el ancho a un porcentaje
        height: 570,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    header: {
        alignItems: 'center',
        padding: 0,
    },
    image: {
        width: '100%', // Mantiene el ancho al 100% del card
        height: 320,
        borderRadius: 8,
    },
    body: {
        alignItems: 'center',
        marginVertical: 2,
    },
    title: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
    brand: {
        fontSize: 16,
        margin: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    success: {
        color: '#4caf50',
    },
    danger: {
        color: '#e53935',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#ecf0f1',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    modalImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginVertical: 10,
    },
    modalDescription: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Cardprod;