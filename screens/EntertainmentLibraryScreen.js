import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import AWS from 'aws-sdk'
import styles from '../style/app-styles';

AWS.config.update({
    accessKeyId: process.env.API_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
})

const s3 = new AWS.S3();

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
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: process.env.AWS_ENTERTAINMENT_JSON_FILE
            };
            const data = await s3.getObject(params).promise();
            if (data != null) {
                const entertainmentContents = JSON.parse(data.Body.toString());
                console.log(entertainmentContents)
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
                            <Text style={styles.blackText} key={index}>{entertainment.name}</Text>
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default EntertainmentLibraryScreen;