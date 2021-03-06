import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { firebase } from '../../config/config';
import { globalStyles } from '../../style/global';
import Congratulation from './Games/Congratulation';
import * as Font from 'expo-font';

// Games
import TebakGambar from './Games/TebakGambar';

export default function GameplayScreen({ route, navigation }) {
    const { gameTitle, level, highestLevel } = route.params;
    const [listPic, setListPic] = useState(null);
    const [noPic, setNoPic] = useState(1);
    const [componentGame, setComponentGame] = useState(undefined);
    const [stage, setStage] = useState(0);

    async function getFonts() {
        await Font.loadAsync({
            'open-dyslexic': require('../../../assets/fonts/open-dyslexic.ttf'),
        })
    }

    useEffect(() => {
        getFonts();
        firebase.firestore()
            .collection('progress')
            .doc('name the picture')
            .get()
            .then(snapshot => {
                const data = snapshot.data();
                console.log(data);
                const listPicture = data['level-' + level];
                const shuffleList = listPicture.sort(() => Math.random() - 0.5)
                setListPic(shuffleList);
                // setName(data.fullName);
                // setEmail(data.email);
                return data;
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    }, []);

    useEffect(() => {
        if (listPic !== null) {
            const component = listPic.map((data, idx) => {
                if (idx === stage) {
                    return <TebakGambar answer={data.answer} imgName={data.imgName} setStage={setStage} key={idx} />
                }
            });

            if (stage === listPic.length) {
                setComponentGame(<Congratulation gameTitle={gameTitle} level={level} highestLevel={highestLevel} navigation={navigation} />);
            } else {
                setComponentGame(component);
            }
        }

    }, [stage, listPic]);

    navigation.setOptions({
        title: gameTitle,
        headerTitleStyle: { ...globalStyles.headerTitleStyle, fontSize: 20 },
    })

    return (
        <View style={globalStyles.container}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                <Text style={{ color: 'white', fontFamily: "open-dyslexic", fontSize: 24, textAlign: 'center' }}>{gameTitle} Level {level}</Text>
            </View>

            {componentGame !== undefined ?
                componentGame : <></>
            }

        </View>
    )
}

const styles = StyleSheet.create({

})