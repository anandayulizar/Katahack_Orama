import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';


// Styles
import { globalStyles } from '../../style/global';

// Screens
import DashboardScreen from './DashboardScreen';
import GamePickerScreen from './GamePickerScreen';
import Chatbot from './Chatbot'
import GameplayScreen from './GameplayScreen';
import LevelPickerScreen from './LevelPickerScreen';

const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
    async function getFonts() {
        await Font.loadAsync({
            'OpenDyslexic-Regular': require('../../../assets/fonts/OpenDyslexic-Regular.otf'),
        })
    }

    useEffect(() => {
        getFonts();
    }, []);

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: styles.headerStyle,
                headerTintColor: '#FFFAF0',
                headerTitleStyle: styles.headerTitleStyle,
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen
                name='Home'
                component={DashboardScreen}
                options={{
                    title: 'Home'
                }}
            />
            <Stack.Screen
                name='Chat'
                component={Chatbot}
                options={{
                    title: 'Chat'
                }}
            />
            <Stack.Screen
                name='Game'
                component={GamePickerScreen}
                options={{
                    title: 'Pick a game'
                }}
            />
            <Stack.Screen
                name='LevelPicker'
                component={LevelPickerScreen}
                options={{
                    title: 'Pick a level'
                }}
            />
            <Stack.Screen
                name='Gameplay'
                component={GameplayScreen}
                options={{
                    title: 'Play game!'
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#161F24',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        fontFamily: "OpenDyslexic-Regular",

    },
    headerTitleStyle: {
        fontWeight: '300',
        fontSize: 28,
        letterSpacing: 1.5,
        fontFamily: "OpenDyslexic-Regular",
    },
})