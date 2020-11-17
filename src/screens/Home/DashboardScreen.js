import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { firebase } from '../../config/config';
import { globalStyles } from '../../style/global';
import * as Font from 'expo-font';

export default function DashboardScreen({ route, navigation }) {
    const [user, setUser] = useState(undefined);
    async function getFonts() {
        await Font.loadAsync({
            'open-dyslexic': require('../../../assets/fonts/open-dyslexic.ttf'),
        })
    }
    useEffect(() => {
        getFonts();
        if (route.params !== undefined) {
            if (route.params.user !== undefined) {
                setUser(route.params.user);
            }
        }
        var userLoggedIn = firebase.auth();
        if (userLoggedIn == null) {
            navigation.navigate('Login');
        } else {
            if (userLoggedIn.currentUser != null) {
                firebase.firestore()
                    .collection('users')
                    .doc(userLoggedIn.currentUser.uid)
                    .get()
                    .then(snapshot => {
                        const data = snapshot.data();
                        console.log(data);
                        setUser(data);
                        return data;
                    })
                    .catch(err => {
                        console.log('Error getting documents', err);
                    });
            }
            console.log(userLoggedIn.currentUser);

        }

    }, []);
    console.log(route.params);
    // const { user } = route.params;

    const navigationHandler = (categoryTitle) => {
        navigation.navigate('Game', {
            categoryTitle,
        })
    }

    return (
        <View style={globalStyles.container}>
            <Text style={styles.title}>Hello, {user ? user.fullName : ''}!</Text>
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
                            source={require('../../../assets/Categories/verbal-1.png')}
                        />
                        <Text style={styles.categoryTitle}>Words</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryContainer}
                        onPress={() => navigationHandler('Number')}
                    >
                        <Image
                            style={styles.categoryImage}
                            source={require('../../../assets/Categories/num-1.png')}
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
                            source={require('../../../assets/Categories/memory-1.png')}
                        />
                        <Text style={styles.categoryTitle}>Memory</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryContainer}
                        onPress={() => navigationHandler('Picture')}
                    >
                        <Image
                            style={styles.categoryImage}
                            source={require('../../../assets/Categories/visual-1.png')}
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
        fontFamily: "open-dyslexic",
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    categoryImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
        borderRadius: 50
    },
    title: {
        fontFamily: "open-dyslexic",
        color: 'white',
        fontSize: 30,
        letterSpacing: 0.5,
        marginBottom: 10,
    },
    secondaryTitle: {
        fontFamily: "open-dyslexic",
        fontSize: 16,
        color: 'white',
    }
})