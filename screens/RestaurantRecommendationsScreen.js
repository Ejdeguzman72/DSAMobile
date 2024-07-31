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

const RestaurantRecommendationsScreen = () => {
    const handleButtonPress = () => {
        setLandingPageVisible(false);
        setAutoshopsVisible(true);
    };
    //   const jsonData = recipeJson;
    const [restaurantJsonData, setRestaurantJsonData] = useState(null);
    const [landingPageVisible, setLandingPageVisible] = useState(true);
    const [restaurantVisible, setRestaurantVisible] = useState(false);

    const fetchJsonData = async () => {
        try {
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: process.env.AWS_RESTAURANT_RECOMMENDATIONS_JSON_FILE
            };
            const data = await s3.getObject(params).promise();
            if (data != null) {
                const restaurantContents = JSON.parse(data.Body.toString());
                setRestaurantJsonData(restaurantContents);
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
                        {restaurantJsonData && restaurantJsonData.map((restaurant, index) => (
                            <Text style={styles.blackText} key={index}>{restaurant.name}</Text>
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default RestaurantRecommendationsScreen;