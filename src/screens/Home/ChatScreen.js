import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat';

import { IconButton } from 'react-native-paper';

// Style
import { globalStyles } from '../../style/global';

export default function ChatScreen() {
    const [lastId, setLastId] = useState(1);
    const [messages, setMessages] = useState([
        {
            _id: 0,
            text: 'Meet Orama!',
            createdAt: new Date().getTime(),
            system: true,
        },
        {
            _id: 1,
            text: 'Hello! What can I help you with?',
            createdAt: new Date().getTime(),
            user: {
                _id: 2,
                name: 'Orama',
                avatar: 'https://png-drawing.com/wp-content/uploads/bird-in-yellow-circle-logo-united-airlines-logo-png-download-free.jpg'
            }
        }
    ])

    const replyMessage = (message) => {
        return 'Halo! Ini adalah reply automatis';
    }

    const handleSend = (userMessages) => {
        newMessages = []
        userMessages.forEach(message => {
            oramaMessage = replyMessage(message.text);
            newMessages.push(message);
            newMessages.push({
                _id: lastId + 1,
                text: oramaMessage,
                createdAt: new Date().getTime(),
                user: {
                    _id: 2,
                    name: 'Orama',
                    avatar: 'https://png-drawing.com/wp-content/uploads/bird-in-yellow-circle-logo-united-airlines-logo-png-download-free.jpg'
                }
            })
            setLastId(lastId + 1);

        })
        setMessages(prevMessages => {
            return [...prevMessages, ...newMessages];
        })
    }

    const renderSend = () => {
        return (
            <Send {...props}>
                <View style={styles.sendingContainer}>
                    <IconButton icon='send-circle' size={32} color='black' />
                </View>
            </Send>
        )
    }

    return (
        <GiftedChat
            messages={messages.slice().reverse()}
            onSend={newMessage => handleSend(newMessage)}
            user={{
                _id: 1,
                name: 'User Testing',
                avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
            }}
        />
    )
}

const styles = StyleSheet.create({
    sendingContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})