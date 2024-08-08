import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, TouchableHighlight, SafeAreaView, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';
import AutoShopCard from '../components/card/AutoShopCard';
import styles from '../style/app-styles';
import uploadJsonToS3 from '../services/UploadJsonToS3';
import s3 from '../config/aws-config';

const AutoShopScreen = () => {
    const [autoshopJsonData, setAutoshopJsonData] = useState(null);
    const [landingPageVisible, setLandingPageVisible] = useState(true);
    const [autoshopsVisible, setAutoshopsVisible] = useState(false);

    const fetchJsonData = async () => {
        try {
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: process.env.AWS_AUTOSHOP_JSON_FILE
            };
            const data = await s3.getObject(params).promise();
            if (data != null) {
                const autoshopContents = JSON.parse(data.Body.toString());
                setAutoshopJsonData(autoshopContents);
            } else {
                // setRecipeJsonData(jsonData);
            }
        } catch (error) {
            console.log(`Error fetching JSON data: `, error);
        }
    };

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
                        {autoshopJsonData && autoshopJsonData.map((autoshop, index) => (
                            <AutoShopCard
                                autoshop={autoshop}
                                index={index}
                                key={index}
                                autoShops={autoshopJsonData}
                                setAutoShops={setAutoshopJsonData}
                            />
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AutoShopScreen;