import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import { globalStyles } from '../../style/global';
import { EvilIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import { firebase } from '../../config/config';

export default function LevelPickerScreen({ route, navigation }) {
    const { gameTitle } = route.params;
    const [games, setGames] = useState([]);
    const [highestLevel, setHighestLevel] = useState(0);

    async function getFonts() {
        await Font.loadAsync({
            'OpenDyslexic-Regular': require('../../../assets/fonts/OpenDyslexic-Regular.otf'),
        })
    }

    useEffect(() => {
        getFonts();
        firebase.firestore().collection('userProgress').doc(firebase.auth().currentUser.uid).onSnapshot((doc) => {
            if (!doc.exists) return;
            const highestLevel = doc.data().highestLevel;
            const highestInGameTitle = highestLevel[gameTitle.toLowerCase()];
            const gameList = [];
            for (let i = 1; i <= 3; i++) {
                gameList.push({ level: i.toString(), passed: i < highestInGameTitle });
            }
            setGames(gameList);
            setHighestLevel(highestInGameTitle);
        });
    }, []);

    navigation.setOptions({
        title: gameTitle,
    });

    const getColor = (num) => {
        const colors = ['green', 'yellow', 'red', 'turquoise'];
        return colors[num]
    }

    const levelNavigation = (item) => {
        if (highestLevel >= parseInt(item.level)) {
            navigation.navigate('Gameplay', {
                gameTitle,
                level: item.level,
                highestLevel
            })
        }
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
                            onPress={() => levelNavigation(item)}
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
        marginBottom: 5,
        letterSpacing: 2,
        fontFamily: "OpenDyslexic-Regular",
    },
})