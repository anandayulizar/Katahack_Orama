import React from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from '@use-expo/font';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161F24',
        padding: 20,
    },
    headerStyle: {
        backgroundColor: '#161F24',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
    headerTitleStyle: {
        fontWeight: '300',
        fontSize: 28,
        letterSpacing: 1.5,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    secondaryTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
        marginTop: 10,
    }
})

// import React from 'react';
// import { StyleSheet } from 'react-native';
// import * as Font from 'expo-font';
// import { useFonts } from '@use-expo/font';

// function loadFont() {
//     let [fontsLoaded] = useFonts({
//         'OpenDyslexic-Regular': require('../../assets/fonts/OpenDyslexic-Regular.otf'),
//     });
// }

// if(fontsLoaded) {
//     let styles = StyleSheet.create({
//         container: {
//             flex: 1,
//             backgroundColor: '#161F24',
//             padding: 20,
//             fontFamily: "OpenDyslexic-Regular"
//         },
//         headerStyle: {
//             backgroundColor: '#161F24',
//             borderBottomColor: 'grey',
//             borderBottomWidth: 1,
//             borderStyle: 'solid',
//             fontFamily: "OpenDyslexic-Regular"
//         },
//         headerTitleStyle: {
//             fontWeight: '300',
//             fontSize: 28,
//             letterSpacing: 1.5,
//             fontFamily: "OpenDyslexic-Regular"
//         },
//         title: {
//             color: 'white',
//             fontSize: 30,
//             fontWeight: '700',
//             letterSpacing: 0.5,
//             fontFamily: "OpenDyslexic-Regular"
//         },
//         secondaryTitle: {
//             fontSize: 16,
//             color: 'white',
//             fontWeight: '500',
//             marginTop: 10,
//             fontFamily: "OpenDyslexic-Regular"
//         }
//     })
// }
// export const globalStyles = styles;