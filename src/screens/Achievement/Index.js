import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { globalStyles } from '../../style/global';

const Stack = createStackNavigator();

function Dashboard({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Achievement euyy</Text>
        </View>
    )
}

export default function AchievementScreen({ navigation }) {
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
                name='Achievement'
                component={Dashboard}
                options={{
                    title: 'Achievement'
                }}
            />
        </Stack.Navigator>
    )
}