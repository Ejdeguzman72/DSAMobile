import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style/app-styles';
import DeleteButton from '../button/DeleteButton';

const ContactInfoCard = ({ contact = {
    firstname: '',
    middleInitial: '',
    lastname: '',
    address01: '',
    address02: '',
    city: '',
    state: '',
    zipcode: '',
    age: 0,
    birthdate: '',
    phone: '',
    email: ''
}, index, contacts, setContacts }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleDelete = () => {
        const newContacts = [...contacts];
        newContacts.splice(index, 1);
        setContacts(newContacts);
        Alert.alert("Updated Contact Info");
        closeModal();
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
                            <Text style={styles.modalText}>Phone: {contact.phone}</Text>
                            <Text style={styles.modalText}>Email: {contact.email}</Text>
                            <Text style={styles.modalText}>Birthdate: {contact.birthdate}</Text>
                            <TouchableHighlight onPress={closeModal}>
                                <Text style={styles.closeButton}>Close</Text>
                            </TouchableHighlight>
                            {/* <TouchableHighlight>
                                <Text style={styles.updateButton}>Update</Text>
                            </TouchableHighlight>
                            <DeleteButton onDelete={handleDelete} /> */}
                        </View>
                    </Card>
                </View>
            </Modal>
        </View>
    );

}

export default ContactInfoCard;