import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Button } from 'react-native';
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
        if(answerInput.toLowerCase() === answer){
            console.log('yee');
            setStage(prev => prev+1);
        }
    }
    return (
        <View style={styles.gameContainer}>
            <View style={styles.imgContainer}>
                {imgUrl === '' ? <></> : <Image style={styles.guessImg} source={{ uri: imgUrl }} />}
            </View>
            <TextInput
                style={styles.answerInput}
                placeholder='What image is it?'
                onChangeText={(answer) => setAnswerInput(answer)}
                value={answerInput}
            />
            <View>
                <Text style={{color: 'red'}}>{incorrect ? 'Incorrect Answer. Please try again.' : ''}</Text>
            </View>
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
        marginTop: 50,
        padding: 5,
        minWidth: 300,
        textAlign: 'center',
        marginBottom: 20,
    },
    imgContainer:{ 
        width: 220, 
        height: 220, 
        backgroundColor: 'white', 
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})