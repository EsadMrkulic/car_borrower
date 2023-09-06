import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, View } from 'react-native';
import CarForm from '../components/carForm';
import { useNavigation } from '@react-navigation/native';

const LendCar = () => {
    const navigation = useNavigation();
    const [carInfo, setCarInfo] = useState([]);

    const handleFormSubmit = (formData) => {
        const updatedCars = [...carInfo, formData];
        setCarInfo(updatedCars);
        navigation.navigate('Rent', { carInfo: updatedCars });
        console.log(formData);
    };

    return (
        <ScrollView style={{ flex: 1, marginBottom: 100 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.text}>Lend Your Car</Text>
                    <CarForm onSubmit={handleFormSubmit} />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
    },
});

export default LendCar;
