// DeleteButton.js
import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from '../../style/app-styles';

const DeleteAButton = ({ onDelete }) => {
  return (
    <TouchableHighlight onPress={onDelete}>
      <Text style={styles.deleteButton}>Delete</Text>
    </TouchableHighlight>
  );
};

export default DeleteButton;
