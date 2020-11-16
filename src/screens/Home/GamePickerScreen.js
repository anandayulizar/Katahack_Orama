import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import { globalStyles } from '../../style/global';

export default function GamePickerScreen({ route, navigation }) {
    const [games, setGames] = useState([
        { title: 'Name the Picture', description: 'Guess the name of the object in the picture and say it to me!', image: 'http://clipart-library.com/images/6cr6d9qcK.gif', color: 'green', key: '0' },
        { title: 'Game 2', description: 'ini adalah game kedua dari semua game-game yang disediakan di sini yuhu', image: 'http://clipart-library.com/images/6cr6d9qcK.gif', color: 'yellow', key: '1' },
        { title: 'Game 3', description: 'ini adalah game ketiga dari semua game-game yang disediakan di sini yuhu', image: 'http://clipart-library.com/images/6cr6d9qcK.gif', color: 'red', key: '2' },
        { title: 'Game 4', description: 'ini adalah game keempat dari semua game-game yang disediakan di sini yuhu', image: 'http://clipart-library.com/images/6cr6d9qcK.gif', color: 'turquoise', key: '3' },
    ])

    const { categoryTitle } = route.params;

    navigation.setOptions({
        title: categoryTitle + ' Game',
    })

    const getColor = (num) => {
        const colors = ['green', 'yellow', 'red', 'turquoise'];
        return colors[num]
    }

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={games}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={{ ...styles.gameContainer, borderColor: getColor(parseInt(item.key) % 4) }}
                            onPress={() => navigation.navigate('LevelPicker', {
                                gameTitle: item.title,
                            })}
                        >
                            <Image style={styles.gameImage} source={{ uri: item.image }} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.gameTitle}>{item.title}</Text>
                                <Text style={styles.gameDesc}>{item.description}</Text>
                            </View>
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
    },
    gameImage: {
        width: 80,
        height: 80
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
    },
    gameTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 5,
    },
    gameDesc: {
        color: 'white',
        fontSize: 12,
    }
})