import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import { globalStyles } from '../../style/global';

export default function GameplayScreen({ route, navigation }) {
    const { gameTitle } = route.params;

    navigation.setOptions({
        title: gameTitle,
    })

    return (
        <View style={globalStyles.container}>
            <Text style={{ color: 'white' }}>Let's play {gameTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})