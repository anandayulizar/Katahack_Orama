import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { globalStyles } from '../../style/global';

export default function GameplayScreen({ route, navigation }) {
    const { gameTitle, level } = route.params;

    navigation.setOptions({
        title: gameTitle,
    })

    return (
        <View style={globalStyles.container}>
            <Text style={{ color: 'white' }}>{gameTitle} level {level}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})