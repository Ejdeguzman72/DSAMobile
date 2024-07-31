import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SectionListMenu = ({ links = [] }) => {
  const navigation = useNavigation();

  if (!Array.isArray(links)) {
    console.error('Links should be an array');
    return null;
  }

  return (
    <View style={styles.container}>
      {links.map((link, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(link.screen)}
          style={styles.linkContainer}
        >
          <Text style={styles.text}>{link.label}</Text>
          <Text style={styles.learnMore}>Learn More</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#000', // Change this to the color you want
    // borderBottomStyle: 'solid', // 'borderBottomStyle' is not supported in React Native
  },
  text: {
    fontSize: 20,
    color: 'white',
    flex: 1,
  },
  learnMore: {
    fontSize: 20,
    color: 'blue',
    marginLeft: 10,
  },
});

export default SectionListMenu;