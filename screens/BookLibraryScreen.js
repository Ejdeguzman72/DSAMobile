import React, { useEffect, useState } from 'react';
import { ScrollView, View, SafeAreaView, ImageBackground } from 'react-native';
import styles from '../style/app-styles';
import BookCard from '../components/card/BookCard';
import s3 from '../config/aws-config';
import {DSA_MOBILE_BUCKET_NAME,AWS_BOOKS_JSON_FILE} from '@env';

const BookLibraryScreen = () => {
    const handleButtonPress = () => {
        setLandingPageVisible(false);
        setAutoshopsVisible(true);
    };
    //   const jsonData = recipeJson;
    const [booksJsonData, setBooksJsonData] = useState(null);
    const [landingPageVisible, setLandingPageVisible] = useState(true);
    const [booksVisible, setBooksVisible] = useState(false);

    const fetchJsonData = async () => {
        try {
            const params = {
                Bucket: DSA_MOBILE_BUCKET_NAME,
                Key: AWS_BOOKS_JSON_FILE
            };
            const data = await s3.getObject(params).promise();
            if (data != null) {
                const booksContents = JSON.parse(data.Body.toString());
                setBooksJsonData(booksContents);
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
                        {booksJsonData && booksJsonData.map((book, index) => (
                            <BookCard
                                book={book}
                                key={index}
                                index={index}
                                books={setBooksJsonData}
                            />
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default BookLibraryScreen;