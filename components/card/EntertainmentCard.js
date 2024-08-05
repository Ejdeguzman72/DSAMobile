import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style/app-styles';

const EntertainmentCard = ({ entertainment = {
    name: '',
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
                    <Card.Title style={styles.cardTitle}>{`${entertainment.name} - ${entertainment.descr}`}</Card.Title>
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
                        <Card.Title>{`${entertainment.name}`}</Card.Title>
                        <Card.Divider></Card.Divider>
                        <View>
                            <Text style={styles.modalText}>Type: {`${entertainment.descr}`}</Text>
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

export default EntertainmentCard;