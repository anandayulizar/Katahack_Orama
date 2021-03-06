import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { firebase } from '../../config/config';
import { globalStyles } from '../../style/global';
import { Image } from 'react-native';
import User from '../../User';

const Stack = createStackNavigator();

function Dashboard({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const user = firebase.auth().currentUser;
    const imageName = 'temp-logo.png';
    useEffect(() => {
        let user = firebase.auth();
        if (user == null) {
            navigation.navigate('Login');
        }
        firebase.firestore()
            .collection('users')
            .doc(user.currentUser.uid)
            .get()
            .then(snapshot => {
                const data = snapshot.data();
                console.log(data);
                setName(data.fullName);
                setEmail(data.email);
                return data.fullName;
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });

        let imageRef = firebase.storage().ref(imageName);
        imageRef
            .getDownloadURL()
            .then((url) => {

                setImageUrl(url);
            })
            .catch((e) => console.log('getting downloadURL of image error => ', e));
    }, []);
    const logout = () => {
        firebase.auth().signOut().then(() => {
            // navigation.navigate('Login');

            navigation.navigate('Login');
        }).catch(err => console.log(err.message));
    }
    return (
        <View style={globalStyles.container}>
            <View style={styles.profileContainer}>
                <View style={{ display: 'flex' }}>
                    <View style={styles.profile}>
                        <View>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.secondaryTitle}>{email}</Text>
                        </View>
                        <View>
                            {imageUrl === '' ? <Text style={globalStyles.title}></Text> :
                                <Image source={{ uri: imageUrl }}
                                    style={styles.chatImg}
                                />
                            }
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Your Friends</Text>
                        <View>

                        </View>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Last Game You've Played</Text>
                        <View>

                        </View>
                    </View>
                </View>
                <Button onPress={logout} title='Log out' />
            </View>
        </View>
    )
}

export default function ProfileScreen({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: styles.headerStyle,
                headerTintColor: '#FFFAF0',
                headerTitleStyle: styles.headerTitleStyle,
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen
                name='Profile'
                component={Dashboard}
                options={{
                    title: 'Profile'
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        position: 'absolute',
        right: 20,
        top: 30,
    },
    chatImg: {
        width: 100,
        height: 100,
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
    },
    categoryImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20
    },
    profileContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    card: {
        backgroundColor: 'white',
        minHeight: 150,
        marginBottom: 40,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    cardTitle: {
        fontSize: 24,
        fontFamily: "open-dyslexic",
    },
    headerStyle: {
        backgroundColor: '#161F24',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderStyle: 'solid',

    },
    headerTitleStyle: {
        fontSize: 28,
        letterSpacing: 1.5,
        fontFamily: "open-dyslexic",
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