import React, { useEffect, useState } from 'react';
import { ScrollView, View, SafeAreaView, ImageBackground } from 'react-native';
import styles from '../style/app-styles';
import UtilityCard from '../components/card/UtilityCard';
import {DSA_MOBILE_BUCKET_NAME,AWS_UTILITY_JSON_FILE} from '@env';
import s3 from '../config/aws-config';

const UtilityReminderScreen = () => {
    const handleButtonPress = () => {
        setLandingPageVisible(false);
        setUtilityVisible(true);
    };
    //   const jsonData = recipeJson;
    const [utilityJsonData, setUtilityJsonData] = useState(null);
    const [landingPageVisible, setLandingPageVisible] = useState(true);
    const [utilityVisible, setUtilityVisible] = useState(false);

    const fetchJsonData = async () => {
        try {
            const params = {
                Bucket: DSA_MOBILE_BUCKET_NAME,
                Key: AWS_UTILITY_JSON_FILE
            };
            const data = await s3.getObject(params).promise();
            if (data != null) {
                const utilityContents = JSON.parse(data.Body.toString());
                setUtilityJsonData(utilityContents);
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
                        {utilityJsonData && utilityJsonData.map((utility, index) => (
                            <UtilityCard utility={utility} key={index} />
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default UtilityReminderScreen;