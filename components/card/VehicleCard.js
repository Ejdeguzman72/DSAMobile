import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style/app-styles';

const VehicleCard = ({ vehicle = {
    make: '',
    model: '',
    year: '',
    capacity: 0,
    transmission: '',
    lastMaintenanceDate: '',
    mileage: 0
} }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View>
            <TouchableHighlight onPress={openModal}>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.cardTitle}>{`${vehicle.make} ${vehicle.model} ${vehicle.year}`}</Card.Title>
                </Card>
            </TouchableHighlight>

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <Card containerStyle={styles.modalCard}>
                        <Card.Title>{`${vehicle.make} ${vehicle.model} ${vehicle.year}`}</Card.Title>
                        <ScrollView>
                            <Text style={styles.modalText}>Capacity: {`${vehicle.capacity}`}</Text>
                            <Text style={styles.modalText}>Transmission: {`${vehicle.transmission}`}</Text>
                            <Text style={styles.modalText}>Last Maintenance Date: {`${vehicle.lastMaintenanceDate}`}</Text>
                            <Text style={styles.modalText}>Mileage: {`${vehicle.mileage}`}</Text>
                            <TouchableHighlight onPress={closeModal}>
                                <Text style={styles.closeButton}>Close</Text>
                            </TouchableHighlight>
                        </ScrollView>
                    </Card>
                </View>
            </Modal>
        </View>
    );

}

export default VehicleCard;