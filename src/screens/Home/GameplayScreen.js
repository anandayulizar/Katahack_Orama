import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { globalStyles } from '../../style/global';

// Games
import TebakGambar from './Games/TebakGambar'

export default function GameplayScreen({ route, navigation }) {
    const { gameTitle, level } = route.params;

    navigation.setOptions({
        title: gameTitle,
        headerTitleStyle: { ...globalStyles.headerTitleStyle, fontSize: 20 },
    })

    return (
        <View style={globalStyles.container}>
            <Text style={{ color: 'white' }}>{gameTitle} level {level}</Text>
            <TebakGambar />
        </View>
    )
}

const styles = StyleSheet.create({

})