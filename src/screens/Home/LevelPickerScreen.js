import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import { globalStyles } from '../../style/global';
import { EvilIcons } from '@expo/vector-icons';

import { firebase } from '../../config/config';

export default function LevelPickerScreen({ route, navigation }) {
    const { gameTitle } = route.params;
    const [games, setGames] = useState([]);
    const [highestLevel, setHighestLevel] = useState(0);

    useEffect(() => {
        firebase.firestore().collection('progress').doc(gameTitle.toLowerCase()).get().then((doc) => {
            if (!doc.exists) return;
            const highestLevel = doc.data().highestLevel;
            const gameList = [];
            for (let i = 1; i <= 3; i++) {
                gameList.push({ level: i, passed: i < highestLevel });
            }
            setGames(gameList);
            setHighestLevel(highestLevel);
        });
    }, []);

    navigation.setOptions({
        title: gameTitle,
    });

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
                    let icon = item.passed ? 'check' : 'lock';
                    return (
                        <TouchableOpacity
                            style={{ ...styles.gameContainer, borderColor: getColor(parseInt(item.level) % 4) }}
                            onPress={() => navigation.navigate('Gameplay', {
                                gameTitle,
                                level: item.level
                            })}
                        >
                            <Text style={styles.levelTitle}>Level {item.level} </Text>

                            {parseInt(item.level) == highestLevel ? <Text></Text> : <EvilIcons name={icon} size={60} color="white" />}

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