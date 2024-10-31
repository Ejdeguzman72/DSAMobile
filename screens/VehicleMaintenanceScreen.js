import React, { useEffect, useState } from 'react';
import { ScrollView, View, SafeAreaView, ImageBackground } from 'react-native';
import styles from '../style/app-styles';
import VehicleCard from '../components/card/VehicleCard';
import {DSA_MOBILE_BUCKET_NAME,AWS_VEHICLE_JSON_FILE} from '@env';
import s3 from '../config/aws-config';

const VehicleMaintenanceScreen = () => {
    const handleButtonPress = () => {
        setLandingPageVisible(false);
        setVehicleVisible(true);
    };
    //   const jsonData = recipeJson;
    const [vehicleJsonData, setVehicleJsonData] = useState(null);
    const [landingPageVisible, setLandingPageVisible] = useState(true);
    const [vehicleVisible, setVehicleVisible] = useState(false);

    const fetchJsonData = async () => {
        try {
            const params = {
                Bucket: DSA_MOBILE_BUCKET_NAME,
                Key: AWS_VEHICLE_JSON_FILE
            };
            const data = await s3.getObject(params).promise();
            if (data != null) {
                const vehicleContents = JSON.parse(data.Body.toString());
                setVehicleJsonData(vehicleContents);
            } else {
                // setRecipeJsonData(jsonData);
            }
        } catch (error) {
            console.log(`Error fetching JSON data: `, error);
        }
    }

    useEffect(() => {
        fetchJsonData();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ImageBackground
                    source={require('../assets/background.jpg')}
                    style={styles.background}
                >
                    <View style={styles.container}>
                        {vehicleJsonData && vehicleJsonData.map((vehicle, index) => (
                            <VehicleCard vehicle={vehicle} key={index} />
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default VehicleMaintenanceScreen;