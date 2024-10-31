import React, { useEffect, useState } from 'react';
import { ScrollView, View, SafeAreaView, ImageBackground } from 'react-native';
import styles from '../style/app-styles';
import RestaurantCard from '../components/card/RestaurantCard';
import {DSA_MOBILE_BUCKET_NAME,AWS_RESTAURANT_RECOMMENDATIONS_JSON_FILE} from '@env';
import s3 from '../config/aws-config';

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
                Bucket: DSA_MOBILE_BUCKET_NAME,
                Key: AWS_RESTAURANT_RECOMMENDATIONS_JSON_FILE
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
                            <RestaurantCard restaurant={restaurant} key={index} />
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default RestaurantRecommendationsScreen;