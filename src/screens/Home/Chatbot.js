import React, { Component } from 'react';
import { StyleSheet, Text, View, TextArea } from 'react-native';
import { GiftedChat, Send, InputToolbar } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';

import { dialogflowConfig } from '../../config/env';

import { IconButton } from 'react-native-paper';

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
        text: `Hi! I am the FAQ bot 🤖 from Jscrambler.\n\nHow may I help you with today?`,
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
  }
})

export default Chatbot;