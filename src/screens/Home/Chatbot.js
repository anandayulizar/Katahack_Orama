import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { GiftedChat, Send, InputToolbar, Bubble, Avatar } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';

import { dialogflowConfig } from '../../config/env';
import * as Speech from 'expo-speech';

import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-community/voice';

import { IconButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

const BOT_USER = {
  _id: 2,
  name: 'Orama',
  avatar: 'https://png-drawing.com/wp-content/uploads/bird-in-yellow-circle-logo-united-airlines-logo-png-download-free.jpg'
};

class Chatbot extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: `Say rama!`,
        createdAt: new Date(),
        user: BOT_USER
      }
    ]
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id
    );
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };


    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon='send-circle' size={32} color='black' />
        </View>
      </Send>
    );
  }

  renderBubble(props) {
    return (
      <View style={styles.bubbleContainer}>
        <Bubble
          {...props}
          containerStyle={{
            left: {
              marginVertical: 10,
            }
          }}
          wrapperStyle={{
            left: {
              marginRight: 0,
            }
          }}
        />

        { props.currentMessage.user._id == 2 ?
          <TouchableOpacity
            style={styles.micContainer}
            onPress={() => Speech.speak(props.currentMessage.text)}
          >
            <FontAwesome name="microphone" size={24} color="black" />
          </TouchableOpacity>
          :
          null
        }
      </View>
    )
  }

  renderInputToolbar(props) {
    return (
      <InputToolbar {...props} containerStyle={{ paddingVertical: 3, backgroundColor: '#161F24' }} />
    )
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#161F24' }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
            name: 'User Testing',
            avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
          }}
          showAvatarForEveryMessage
          alwaysShowSend
          renderSend={this.renderSend}
          placeholder='Ask me a question!'
          textInputStyle={{
            borderWidth: 0.1,
            borderColor: '#999',
            borderRadius: 20,
            padding: 10,
          }}
          renderBubble={this.renderBubble}
        // renderInputToolbar={this.renderInputToolbar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bubbleContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    // paddingRight: 50,
  },
  micContainer: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginHorizontal: 20,
  }
})

export default Chatbot;