import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style/app-styles';

const ContactInfoCard = ({ contact }) => {
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
                    <Card.Title style={styles.cardTitle}>{`${contact.firstname} - ${contact.lastname}`}</Card.Title>
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
                        <Card.Title>{`${contact.firstname} ${contact.lastname}`}</Card.Title>
                        <Card.Divider></Card.Divider>
                        <View>
                            <Text style={styles.modalText}>Address: {contact.address01}</Text>
                            <Text style={styles.modalText}>City: {contact.city}</Text>
                            <Text style={styles.modalText}>State: {contact.state}</Text>
                            <Text style={styles.modalText}>Zipcode: {contact.zipcode}</Text>
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

export default ContactInfoCard;