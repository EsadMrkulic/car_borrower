import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

const CarForm = ({ onSubmit }) => {
    const [id, setId] = useState(0);
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleMakeChange = (text) => {
        setMake(text);
    };

    const handleModelChange = (text) => {
        setModel(text);
    };

    const handleYearChange = (text) => {
        setYear(text);
    };

    const handleDescriptionChange = (text) => {
        setDescription(text);
    };

    const handlePriceChange = (text) => {
        setPrice(text);
    };

    const handleImageChange = async () => {
        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.canceled === true) {
            return;
        }

        setImage(pickerResult.uri);
    };

    const handleSubmit = () => {
        const newId = id + 1;
        setId(newId);
        setMake('');
        setModel('');
        setYear('');
        setPrice('');
        setDescription('');
        setImage('');

        onSubmit(
            { id: newId, make, model, year, description, image },
            console.log(id)
        );

        console.log('Submitted');
    };

    return (
        <SafeAreaView styles={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.label}>Make</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Make'
                    value={make}
                    onChangeText={handleMakeChange}
                />
                <Text style={styles.label}>Model</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Model'
                    value={model}
                    onChangeText={handleModelChange}
                />
                <Text style={styles.label}>Year</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Year'
                    value={year}
                    onChangeText={handleYearChange}
                />
                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Description'
                    value={description}
                    onChangeText={handleDescriptionChange}
                />
                <Text style={styles.label}>Price Per Day</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Price'
                    value={price}
                    onChangeText={handlePriceChange}
                />
                <Text style={styles.label}>Image</Text>
                <View style={styles.imageContainer}>
                    {image ? (
                        <Image style={styles.image} source={{ uri: image }} />
                    ) : (
                        <Button
                            title='Pick an Image'
                            onPress={handleImageChange}
                        />
                    )}
                </View>
                <Button title='Submit' onPress={handleSubmit} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 2,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
});

export default CarForm;
