import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style/app-styles';

const BookCard = ({ book = {
    title: '',
    author: '',
    descr: ''
}, index, books, setBooks }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleDelete = () => {
        const newBooks = [...books];
        newBooks.splice(index, 1);
        setBooks(newBooks);
        Alert.alert("Updated Books");
        closeModal();
    };

    return (
        <View>
            <TouchableHighlight onPress={openModal}>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.cardTitle}>{`${book.title}`}</Card.Title>
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
                        <Card.Title>{`${book.title}`}</Card.Title>
                        <Card.Divider></Card.Divider>
                        <View>
                            <Card.Divider></Card.Divider>
                            <Text style={styles.modalText}>Author: {book.author}</Text>
                            <Text style={styles.modalText}>Description: {book.descr}</Text>
                            <TouchableHighlight onPress={closeModal}>
                                <Text style={styles.closeButton}>Close</Text>
                            </TouchableHighlight>
                            {/* <TouchableHighlight>
                                <Text style={styles.updateButton}>Update</Text>
                            </TouchableHighlight>
                            <DeleteAutoshopButton onDelete={handleDelete} /> */}
                        </View>
                    </Card>
                </View>
            </Modal>
        </View>
    );

}

export default BookCard;