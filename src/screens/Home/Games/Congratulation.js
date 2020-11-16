import React from 'react';
import { Button } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';

const Congratulation = ({ gameTitle, level }) => {
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
            <Button title="Next"/>
        </View>
    );
}

export default Congratulation;