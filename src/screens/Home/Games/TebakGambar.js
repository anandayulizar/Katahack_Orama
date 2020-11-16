import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Button } from 'react-native';

import { globalStyles } from '../../../style/global';

export default function () {
    const [answer, setAnswer] = useState('');

    return (
        <View style={styles.gameContainer}>
            <Image style={styles.guessImg} source={{ uri: 'http://clipart-library.com/images/6cr6d9qcK.gif' }} />
            <TextInput
                style={styles.answerInput}
                placeholder='What image is it?'
                onChangeText={(answer) => setAnswer(answer)}
                value={answer}
            />
            <Button
                title='Submit Answer'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    gameContainer: {
        minHeight: 500,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
    },
    guessImg: {
        width: 200,
        height: 200,
    },
    answerInput: {
        backgroundColor: 'white',
        // color: '#161F24',
        marginTop: 50,
        padding: 5,
        minWidth: 300,
        textAlign: 'center',
        marginBottom: 20,
    }
})