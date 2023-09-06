import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import RentCar from '../screens/RentCar';
import LendCar from '../screens/LendCar';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                showLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...style.shadow,
                },
            }}
        >
            <Tab.Screen name='Rent' component={RentCar} />
            <Tab.Screen name='Lend' component={LendCar} />
        </Tab.Navigator>
    );
};

const style = StyleSheet.create({
    shadow: {
        shadowColor: '7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});

export default Tabs;
