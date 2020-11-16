import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// Styles
import { globalStyles } from '../../style/global';

// Screens
import DashboardScreen from './DashboardScreen';
import ChatScreen from './ChatScreen';
import LoginScreen from '../Login/LoginScreen';
import RegistrationScreen from '../Registration/RegistrationScreen';

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
                component={ChatScreen}
                options={{
                    title: 'Chat'
                }}
            />
        </Stack.Navigator>
    )
}