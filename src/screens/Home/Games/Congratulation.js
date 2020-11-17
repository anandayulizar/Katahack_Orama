import React, { useEffect } from 'react';
import { firebase } from '../../../config/config';
import { Button } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';

const Congratulation = ({ highestLevel, gameTitle, level, navigation }) => {
    useEffect(() => {
        const attribute = 'highestLevel.'+gameTitle.toLowerCase();
        var maxLevel = 0;
        if(highestLevel > level+1){
            maxLevel = highestLevel;
        }else{
            const levelInt = parseInt(level);
            maxLevel = levelInt+1;
        }
        firebase.firestore()
        .collection('userProgress')
        .doc(firebase.auth().currentUser.uid)
        .update({
            [attribute]: maxLevel,
        })
        .then(() => {
            console.log('User updated!');
        });
    }, []);
    return (  
        <View style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white', textAlign: 'center', marginVertical: 10}}>
                    Congratulations !
                </Text>
                <Text style={{ color: 'white', fontSize: 24}}>
                    You have completed {gameTitle} Level {level} ! 
                </Text>
                <Text style={{ color: 'white', fontSize: 24}}>
                    Let's go to the next level !
                </Text>
            </View>
            <Button onPress={() => navigation.goBack()} title="Next"/>
        </View>
    );
}

export default Congratulation;