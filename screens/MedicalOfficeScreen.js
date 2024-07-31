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

const MedicalOfficeScreen = () => {
    const handleButtonPress = () => {
        setLandingPageVisible(false);
        setAutoshopsVisible(true);
    };
    //   const jsonData = recipeJson;
    const [medicalOfficeJsonData, setMedicalOfficeJsonData] = useState(null);
    const [landingPageVisible, setLandingPageVisible] = useState(true);
    const [medicalOfficeVisible, setMedicalOfficeVisible] = useState(false);

    const fetchJsonData = async () => {
        try {
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: process.env.AWS_MEDICAL_OFFICE_JSON_FILE
            };
            const data = await s3.getObject(params).promise();
            if (data != null) {
                const medicalOfficeContents = JSON.parse(data.Body.toString());
                setMedicalOfficeJsonData(medicalOfficeContents);
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
                        {medicalOfficeJsonData && medicalOfficeJsonData.map((office, index) => (
                            <Text style={styles.blackText} key={index}>{office.address}</Text>
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MedicalOfficeScreen;