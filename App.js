import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/bottomTab';
import { SafeAreaView } from 'react-native-safe-area-context';
import RentCheckOut from './screens/RentCheckout';
import RentCar from './screens/RentCar';
import LendCar from './screens/LendCar';

const App = () => {
    const Stack = createStackNavigator();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden={false} barStyle='default' />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Tabs'
                        component={Tabs}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='RentCheckout'
                        component={RentCheckOut}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;
