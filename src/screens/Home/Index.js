import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

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
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: globalStyles.headerStyle,
                headerTintColor: '#FFFAF0',
                headerTitleStyle: globalStyles.headerTitleStyle,
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