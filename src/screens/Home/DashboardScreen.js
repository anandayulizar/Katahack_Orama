import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { globalStyles } from '../../style/global';

export default function DashboardScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Dashboard euyy</Text>
            <Button onPress={() => navigation.navigate('Chat')} title='Chat with bot' />
        </View>
    )
}