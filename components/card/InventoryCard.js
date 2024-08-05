import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style/app-styles';

const InventoryCard = ({ inventory = {
    name: '',
    condition: '',
    location: '',
    quantity: 0,
    descr: ''
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
                    <Card.Title style={styles.cardTitle}>{`${inventory.name}`}</Card.Title>
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
                        <Card.Title>{`${inventory.name}`}</Card.Title>
                        <Card.Divider></Card.Divider>
                        <View>
                            <Text style={styles.modalText}>Condition: {`${inventory.condition}`}</Text>
                            <Text style={styles.modalText}>Location: {`${inventory.location}`}</Text>
                            <Text style={styles.modalText}>Q\
                            uantity: {`${inventory.quantity}`}</Text>
                            <Text style={styles.modalText}>Description: {`${inventory.description}`}</Text>
                            <TouchableHighlight onPress={closeModal}>
                                <Text style={styles.closeButton}>Close</Text>
                            </TouchableHighlight>
                        </View>
                    </Card>
                </View>
            </Modal>
        </View>
    );

}

export default InventoryCard;