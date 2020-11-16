import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { firebase } from '../../config/config';
import { globalStyles } from '../../style/global';

const Stack = createStackNavigator();

function Dashboard({ navigation }) {
    const logout = () => {
        firebase.auth().signOut().then(() => {
            navigation.navigate('Login');
        }).catch(err => console.log(err.message));
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Profile euyy</Text>
            <Button onPress={logout} title='Log out' />
        </View>
    )
}

export default function ProfileScreen({ navigation }) {
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
                name='Profile'
                component={Dashboard}
                options={{
                    title: 'Profile'
                }}
            />
        </Stack.Navigator>
    )
}