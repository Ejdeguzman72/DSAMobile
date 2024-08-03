import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style/app-styles';

const ContactInfoCard = () => {
    return (
        <View>
            {/* <TouchableHighlight onPress={openModal}>
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
                        <ScrollView>
                            <Card.Text>Address: {`${autoshop.address}`}</Card.Text>
                            <Card.Text>City: {`${autoshop.city}`}</Card.Text>
                            <Card.Text>State: {`${autoshop.state}`}</Card.Text>
                            <Card.Text>Zip: {`${autoshop.zip}`}</Card.Text>
                            <TouchableHighlight onPress={closeModal}>
                                <Text style={styles.closeButton}>Close</Text>
                            </TouchableHighlight>
                        </ScrollView>
                    </Card>
                </View>
            </Modal> */}
            <Text style={styles.blackText}>{`${contact.firstname} ${contact.lastname}`}</Text>
        </View>
    );

}

export default BookCard;