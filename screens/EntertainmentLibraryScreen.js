import React, { useEffect, useState } from 'react';
import { ScrollView, View, SafeAreaView, ImageBackground } from 'react-native';
import styles from '../style/app-styles';
import EntertainmentCard from '../components/card/EntertainmentCard';
import {DSA_MOBILE_BUCKET_NAME,AWS_ENTERTAINMENT_JSON_FILE} from '@env';
import s3 from '../config/aws-config';

const EntertainmentLibraryScreen = () => {
    const handleButtonPress = () => {
        setLandingPageVisible(false);
        setAutoshopsVisible(true);
    };
    //   const jsonData = recipeJson;
    const [entertainmentJsonData, setEntertainmentJsonData] = useState(null);
    const [landingPageVisible, setLandingPageVisible] = useState(true);
    const [entertainmentVisible, setEntertainmentVisible] = useState(false);

    const fetchJsonData = async () => {
        try {
            const params = {
                Bucket: DSA_MOBILE_BUCKET_NAME,
                Key: AWS_ENTERTAINMENT_JSON_FILE
            };
            const data = await s3.getObject(params).promise();
            if (data != null) {
                const entertainmentContents = JSON.parse(data.Body.toString());
                setEntertainmentJsonData(entertainmentContents);
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
                        {entertainmentJsonData && entertainmentJsonData.map((entertainment, index) => (
                            <EntertainmentCard entertainment={entertainment} key={index} />
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default EntertainmentLibraryScreen;