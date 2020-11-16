import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { globalStyles } from '../../style/global';

const Stack = createStackNavigator();

function Dashboard({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Dashboard euyy</Text>
            <Button onPress={() => navigation.navigate('Chat')} title='Chat with bot' />
        </View>
    )
}

function ChatScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>Chat euyy</Text>
        </View>
    )
}

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
                component={Dashboard}
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