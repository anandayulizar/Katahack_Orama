import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import { firebase } from '../../../config/config';
import { globalStyles } from '../../../style/global';

export default function ({ answer, imgName, setStage }) {
    const [answerInput, setAnswerInput] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [incorrect, setIncorrect] = useState(false);

    useEffect(() => {
        let imageRef = firebase.storage().ref('dataset-game/' + imgName);
        imageRef
            .getDownloadURL()
            .then((url) => {
                console.log(url);
                setImgUrl(url);
            })
            .catch((e) => console.log('getting downloadURL of image error => ', e));
    }, []);

    const handlePress = () => {
        console.log('pressed');
        if (answerInput.toLowerCase() === answer) {
            console.log('yee');
            setStage(prev => prev + 1);
        } else {
            setIncorrect(true);
        }
    }
    return (
        <View style={styles.gameContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Chat')}
                style={styles.chatContainer}
            >
                <Image
                    style={styles.chatImg}
                    source={require('../../../../assets/temp-chat.png')}
                />
            </TouchableOpacity>
            <View style={styles.imgContainer}>
                {imgUrl === '' ? <></> : <Image style={styles.guessImg} source={{ uri: imgUrl }} />}
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ color: 'red' }}>{incorrect ? 'Incorrect Answer. Please try again.' : ''}</Text>
            </View>
            <TextInput
                style={styles.answerInput}
                placeholder='What image is it?'
                onChangeText={(answer) => setAnswerInput(answer)}
                value={answerInput}
            />

            <Button
                title='Submit Answer'
                onPress={handlePress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    gameContainer: {
        minHeight: 450,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20
    },
    guessImg: {
        width: 200,
        height: 200,
    },
    answerInput: {
        backgroundColor: 'white',
        // color: '#161F24',
        marginTop: 10,
        padding: 5,
        minWidth: 300,
        textAlign: 'center',
        marginBottom: 20,
    },
    chatContainer: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    chatImg: {
        width: 50,
        height: 50,
    },
    imgContainer: {
        width: 220,
        height: 220,
        backgroundColor: 'white',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})