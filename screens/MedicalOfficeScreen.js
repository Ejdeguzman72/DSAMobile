import React, { useEffect, useState } from 'react';
import { ScrollView, View, SafeAreaView, ImageBackground } from 'react-native';
import styles from '../style/app-styles';
import MedicalOfficeCard from '../components/card/MedicalOfficeCard';
import {DSA_MOBILE_BUCKET_NAME,AWS_MEDICAL_OFFICE_JSON_FILE} from '@env';
import s3 from '../config/aws-config';

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
                Bucket: DSA_MOBILE_BUCKET_NAME,
                Key: AWS_MEDICAL_OFFICE_JSON_FILE
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
                            <MedicalOfficeCard office={office} key={index} />
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MedicalOfficeScreen;