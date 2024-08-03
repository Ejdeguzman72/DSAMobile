import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import AutoShopCard from '../components/card/AutoShopCard';
import AWS from 'aws-sdk'
import styles from '../style/app-styles';

AWS.config.update({
    accessKeyId: process.env.API_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
})

const s3 = new AWS.S3();

const AutoShopScreen = () => {
    const handleButtonPress = () => {
        setLandingPageVisible(false);
        setAutoshopsVisible(true);
    };
    //   const jsonData = recipeJson;
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
                    {autoshopsVisible && autoshopJsonData && (
                            <>
                                {autoshopJsonData.map((autoshop, index) => (
                                    <AutoShopCard key={index} autoshop={autoshop} />
                                ))}
                            </>
                        )}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AutoShopScreen;