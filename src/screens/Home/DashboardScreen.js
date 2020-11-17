import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

import { globalStyles } from '../../style/global';

export default function DashboardScreen({ route, navigation }) {
    const { user } = route.params;

    async function getFonts() {
        await Font.loadAsync({
            'OpenDyslexic-Regular': require('../../../assets/fonts/OpenDyslexic-Regular.otf'),
        })
    }

    useEffect(() => {
        getFonts();
    }, []);

    const navigationHandler = (categoryTitle) => {
        navigation.navigate('Game', {
            categoryTitle,
        })
    }

    return (
        <View style={globalStyles.container}>
            <Text style={styles.title}>Hello, {user.fullName}!</Text>
            <Text style={styles.secondaryTitle}>Let's learn together!</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Chat')}
                style={styles.imgContainer}
            >
                <Image
                    style={styles.chatImg}
                    source={require('../../../assets/temp-chat.png')}
                />
            </TouchableOpacity>
            <View style={styles.gameContainer}>
                <View style={styles.gameRow}>
                    <TouchableOpacity
                        style={styles.categoryContainer}
                        onPress={() => navigationHandler('Words')}
                    >
                        <Image
                            style={styles.categoryImage}
                            source={require('../../../assets/temp-logo.png')}
                        />
                        <Text style={styles.categoryTitle}>Words</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryContainer}
                        onPress={() => navigationHandler('Number')}
                    >
                        <Image
                            style={styles.categoryImage}
                            source={require('../../../assets/temp-logo.png')}
                        />
                        <Text style={styles.categoryTitle}>Number</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.gameRow}>
                    <TouchableOpacity
                        style={styles.categoryContainer}
                        onPress={() => navigationHandler('Memory')}
                    >
                        <Image
                            style={styles.categoryImage}
                            source={require('../../../assets/temp-logo.png')}
                        />
                        <Text style={styles.categoryTitle}>Memory</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryContainer}
                        onPress={() => navigationHandler('Picture')}
                    >
                        <Image
                            style={styles.categoryImage}
                            source={require('../../../assets/temp-logo.png')}
                        />
                        <Text style={styles.categoryTitle}>Picture</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        position: 'absolute',
        right: 20,
        top: 30,
    },
    chatImg: {
        width: 75,
        height: 75,
    },
    gameContainer: {
        display: 'flex',
        flex: 0.8,
        marginTop: 20,
    },
    gameRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    categoryTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: "OpenDyslexic-Regular",
    },
    categoryImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontFamily: "OpenDyslexic-Regular",
        color: 'white',
        fontSize: 30,
        letterSpacing: 0.5,
    },
    secondaryTitle: {
        fontFamily: "OpenDyslexic-Regular",
        fontSize: 16,
        color: 'white',
    }
})