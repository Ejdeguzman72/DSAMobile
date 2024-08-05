import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style/app-styles';

const AutoShopCard = ({ autoshop }) => {
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
                    <Card.Title style={styles.cardTitle}>{`${autoshop.autoShopName} - ${autoshop.address},${autoshop.city} ${autoshop.state} ${autoshop.zip}`}</Card.Title>
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
                        <Card.Title>{`${autoshop.autoShopName}`}</Card.Title>
                        <Card.Divider></Card.Divider>
                        <ScrollView>
                            <Text style={styles.modalText}>Address: {autoshop.address}</Text>
                            <Text style={styles.modalText}>City: {autoshop.city}</Text>
                            <Text style={styles.modalText}>State: {autoshop.state}</Text>
                            <Text style={styles.modalText}>ZipCode: {autoshop.zip}</Text>
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

export default AutoShopCard;