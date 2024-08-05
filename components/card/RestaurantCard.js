import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style/app-styles';

const RestaurantCard = ({ restaurant = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: ''
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
                    <Card.Title style={styles.cardTitle}>{`${restaurant.name} - ${restaurant.descr}`}</Card.Title>
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
                        <Card.Title>{`${restaurant.name}`}</Card.Title>
                        <Card.Divider></Card.Divider>
                        <ScrollView>
                            <Text style={styles.modalText}>Address: {`${restaurant.address}`}</Text>
                            <Text style={styles.modalText}>City: {`${restaurant.city}`}</Text>
                            <Text style={styles.modalText}>State: {`${restaurant.state}`}</Text>
                            <Text style={styles.modalText}>Zip: {`${restaurant.zip}`}</Text>
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

export default RestaurantCard;