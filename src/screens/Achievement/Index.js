import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { globalStyles } from '../../style/global';

const Stack = createStackNavigator();

function Dashboard({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Your Achievement</Text>
                <View>

                </View>
            </View>
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

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white', 
        minHeight: 150, 
        marginBottom: 40, 
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    cardTitle: { 
        fontWeight: 'bold',
        fontSize: 24
    }
})