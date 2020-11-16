import React from 'react';
import { StyleSheet } from 'react-native';

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