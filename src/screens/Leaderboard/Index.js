import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { globalStyles } from '../../style/global';

const Stack = createStackNavigator();

function Dashboard({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Leaderboard</Text>
                <View>

                </View>
            </View>
        </View>
    )
}

export default function LeaderboardScreen({ navigation }) {
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
                name='Leaderboard'
                component={Dashboard}
                options={{
                    title: 'Leaderboard'
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
        fontSize: 24,
        fontFamily: "open-dyslexic",
    },
    headerStyle: {
        backgroundColor: '#161F24',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderStyle: 'solid',

    },
    headerTitleStyle: {
        fontSize: 28,
        letterSpacing: 1.5,
        fontFamily: "open-dyslexic",
    },
})