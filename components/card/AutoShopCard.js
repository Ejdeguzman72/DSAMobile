import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style/app-styles';
import DeleteAutoshopButton from '../button/DeleteButton';
import uploadJsonToS3 from '../../services/UploadJsonToS3';

const AutoShopCard = ({ autoshop, index, autoShops, setAutoShops }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    // const handleDelete = () => {
    //     const newAutoShops = [...autoShops];
    //     newAutoShops.splice(index, 1);
    //     setAutoShops(newAutoShops);
    //     Alert.alert("Updated Auto Shops");
    //     const s3BucketName = process.env.AWS_BUCKET_NAME;
    //     const s3FileName = process.env.AWS_AUTOSHOP_JSON_FILE;
    //     const uploadedFileUrl = uploadJsonToS3(autoShops, s3BucketName, s3FileName);
    //     Alert.alert('Success', `File uploaded successfully at ${uploadedFileUrl}`);
    //     closeModal();
    // };

    return (
        <View>
            <TouchableHighlight onPress={openModal}>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.cardTitle}>
                        {`${autoshop.autoShopName} - ${autoshop.address}, ${autoshop.city} ${autoshop.state} ${autoshop.zip}`}
                    </Card.Title>
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
                        <Card.Title>{autoshop.autoShopName}</Card.Title>
                        <Card.Divider />
                        <ScrollView>
                            <Text style={styles.modalText}>Address: {autoshop.address}</Text>
                            <Text style={styles.modalText}>City: {autoshop.city}</Text>
                            <Text style={styles.modalText}>State: {autoshop.state}</Text>
                            <Text style={styles.modalText}>ZipCode: {autoshop.zip}</Text>
                            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                <TouchableHighlight onPress={closeModal}>
                                    <Text style={styles.closeButton}>Close</Text>
                                </TouchableHighlight>
                                {/* <TouchableHighlight>
                                    <Text style={styles.updateButton}>Update</Text>
                                </TouchableHighlight> */}
                                {/* <DeleteAutoshopButton onDelete={handleDelete} /> */}
                            </View>
                        </ScrollView>
                    </Card>
                </View>
            </Modal>
        </View>
    );
}

export default AutoShopCard;