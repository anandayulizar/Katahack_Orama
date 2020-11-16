import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import { globalStyles } from '../../style/global';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function LevelPickerScreen({ route, navigation }) {
    const [games, setGames] = useState([
        { level: '1', passed: true },
        { level: '2', passed: false },
        { level: '3', passed: false },
        { level: '4', passed: false }
    ])

    const { gameTitle } = route.params;

    navigation.setOptions({
        title: gameTitle,
    })

    const getColor = (num) => {
        const colors = ['green', 'yellow', 'red', 'turquoise'];
        return colors[num]
    }

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={games}
                keyExtractor={(item) => item.level}
                renderItem={({ item }) => {
                    let icon = item.passed ? 'check' : 'cross';
                    return (
                        <TouchableOpacity
                            style={{ ...styles.gameContainer, borderColor: getColor(parseInt(item.level) % 4) }}
                            onPress={() => navigation.navigate('Gameplay', {
                                gameTitle,
                                level: item.level
                            })}
                        >
                            <Text style={styles.levelTitle}>Level {item.level} </Text>
                            <Entypo name={icon} size={60} color="white" />
                        </TouchableOpacity>
                    );
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    gameContainer: {
        borderWidth: 2,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 20,
        flexDirection: 'row',
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    gameImage: {
        width: 80,
        height: 80
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
    },
    levelTitle: {
        color: 'white',
        fontSize: 36,
        fontWeight: '700',
        marginBottom: 5,
        letterSpacing: 2,
    },
    gameDesc: {
        color: 'white',
        fontSize: 12,
    }
})