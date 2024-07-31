import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AutoShopScreen from '../screens/AutoShopScreen';
import BookLibraryScreen from '../screens/BookLibraryScreen';
import ContactInfoScreen from '../screens/ContactInfoScreen';
import EntertainmentLibraryScreen from '../screens/EntertainmentLibraryScreen';
import InventoryScreen from '../screens/InventoryScreen';
import MedicalOfficeScreen from '../screens/MedicalOfficeScreen';
import RestaurantRecommendationsScreen from '../screens/RestaurantRecommendationsScreen';
import VehicleMaintenaceScreen from '../screens/VehicleMaintenanceScreen';
import UtilityReminderScreen from '../screens/UtilityReminderScreen';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerStyle: {
        backgroundColor: '#181818',
      },
      headerTintColor: 'white' }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Auto Repair Shops" component={AutoShopScreen} />
        <Stack.Screen name='Book Library' component={BookLibraryScreen} />
        <Stack.Screen name='Contact Info' component={ContactInfoScreen} />
        <Stack.Screen name='Entertainment Library' component={EntertainmentLibraryScreen} />
        <Stack.Screen name='Inventory' component={InventoryScreen} />
        <Stack.Screen name='Medical Offices' component={MedicalOfficeScreen} />
        <Stack.Screen name='Restaurant Recommendations' component={RestaurantRecommendationsScreen} />
        <Stack.Screen name='Vehicle Maintenance' component={VehicleMaintenaceScreen} />
        <Stack.Screen name='Utility Reminders' component={UtilityReminderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation;