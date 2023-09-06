import { View, ScrollView, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';

const RentCheckout = ({ route }) => {
    const carInfo = route.params?.carInfo || {};

    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Card>
                        <Text>{carInfo.make}</Text>
                        <Text>{carInfo.model}</Text>
                        <Card.Divider />
                        <Text>Year: {carInfo.year}</Text>
                        <Text>Description: {carInfo.description}</Text>
                        <Text>Price per day: ${carInfo.price}</Text>
                        {carInfo.image && (
                            <Card.Image
                                source={{ uri: carInfo.image }}
                                style={styles.image}
                            />
                        )}
                    </Card>
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
export default RentCheckout;
