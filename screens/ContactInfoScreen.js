import React, { useEffect, useState } from 'react';
import { ScrollView, View, SafeAreaView, ImageBackground } from 'react-native';
import styles from '../style/app-styles';
import ContactInfoCard from '../components/card/ContactInfoCard';
import {DSA_MOBILE_BUCKET_NAME,AWS_CONTACT_INFO_JSON_FILE} from '@env';
import s3 from '../config/aws-config';

const ContactInfoScreen = () => {
    const handleButtonPress = () => {
        setLandingPageVisible(false);
        setAutoshopsVisible(true);
    };
    //   const jsonData = recipeJson;
    const [contactInfoJsonData, setContactInfoData] = useState(null);
    const [landingPageVisible, setLandingPageVisible] = useState(true);
    const [contactInfoVisible, setContactInfoVisible] = useState(false);

    const fetchJsonData = async () => {
        try {
            const params = {
                Bucket: DSA_MOBILE_BUCKET_NAME,
                Key: AWS_CONTACT_INFO_JSON_FILE
            };
            const data = await s3.getObject(params).promise();
            if (data != null) {
                const contactInfoCOntents = JSON.parse(data.Body.toString());
                setContactInfoData(contactInfoCOntents);
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
                        {contactInfoJsonData && contactInfoJsonData.map((contact, index) => (
                            <ContactInfoCard 
                                contact={contact} 
                                key={index}
                                index={index}
                                contacts={contactInfoJsonData}
                                setContacts={setContactInfoData} />
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ContactInfoScreen;