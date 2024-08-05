import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style/app-styles';

const UtilityCard = ({ utility }) => {
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
                    <Card.Title style={styles.cardTitle}>{`${utility.name} - ${utility.dueDate}`}</Card.Title>
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
                        <Card.Title>{`${utility.name}`}</Card.Title>
                        <Card.Divider></Card.Divider>
                        <ScrollView>
                            <Text style={styles.modalText}>Phone: {`${utility.phone}`}</Text>
                            <Text style={styles.modalText}>URL: {`${utility.url}`}</Text>
                            <Text style={styles.modalText}>Due Date: {`${utility.dueDate}`}</Text>
                            <Text style={styles.modalText}>Description: {`${utility.utilityTypeDescr}`}</Text>
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

export default UtilityCard;