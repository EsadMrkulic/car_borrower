import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';

const RentCar = ({ route }) => {
    const navigation = useNavigation();

    const carInfo = route.params?.carInfo || {};

    const handleCarPress = (car) => {
        navigation.navigate('RentCheckout', { carInfo: car });
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.text}>Rent a Car</Text>
                    {carInfo.length > 0 ? (
                        carInfo.map((car, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleCarPress(car)}
                            >
                                <Card>
                                    <Card.Title>{car.make}</Card.Title>
                                    <Text>{car.model}</Text>
                                    <Card.Divider />
                                    <Text>Year: {car.year}</Text>
                                    <Text>Description: {car.description}</Text>
                                    <Text>Price per day: ${car.price}</Text>
                                    {car.image && (
                                        <Card.Image
                                            source={{ uri: car.image }}
                                            style={styles.image}
                                        />
                                    )}
                                </Card>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text style={styles.text}>
                            No cars available for rent
                        </Text>
                    )}
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
    image: {
        width: 200,
        height: 200,
    },
});

export default RentCar;
