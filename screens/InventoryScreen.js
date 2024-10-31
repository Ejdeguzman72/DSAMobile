import React, { useEffect, useState } from 'react';
import { ScrollView, View, SafeAreaView, ImageBackground } from 'react-native';
import styles from '../style/app-styles';
import InventoryCard from '../components/card/InventoryCard';
import {DSA_MOBILE_BUCKET_NAME,AWS_INVENTORY_JSON_FILE} from '@env';
import s3 from '../config/aws-config';

const InventoryScreen = () => {
    const handleButtonPress = () => {
        setLandingPageVisible(false);
        setAutoshopsVisible(true);
    };
    //   const jsonData = recipeJson;
    const [inventoryJsonData, setInventoryJsonData] = useState(null);
    const [landingPageVisible, setLandingPageVisible] = useState(true);
    const [inventoryVisible, setInventoryVisible] = useState(false);

    const fetchJsonData = async () => {
        try {
            const params = {
                Bucket: DSA_MOBILE_BUCKET_NAME,
                Key: AWS_INVENTORY_JSON_FILE
            };
            const data = await s3.getObject(params).promise();
            if (data != null) {
                const inventoryContents = JSON.parse(data.Body.toString());
                setInventoryJsonData(inventoryContents);
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
                        {inventoryJsonData && inventoryJsonData.map((inventory, index) => (
                            <InventoryCard inventory={inventory} key={index} />
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default InventoryScreen;