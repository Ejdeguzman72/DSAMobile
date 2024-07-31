import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeSection from '../components/section/HomeSection';
import SectionListMenu from '../components/list/SectionListMenu';
import links from '../json/url-links';
import styles from '../style/app-styles';

function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <HomeSection title="DSA Mobile">
            Welcome to <Text style={styles.highlight}>DSA Mobile!</Text> 
            Keep track of internal records on the go. Be able to check vehicle maintenance records, inventory, library, and favorite restaurants
          </HomeSection>
          <HomeSection title="Contents">
            See below for DSA internal records
          </HomeSection>
        </View>
        <SectionListMenu links={links} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
