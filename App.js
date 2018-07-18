import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import PhoneInput from './src/components/PhoneInput';
import PhoneSubmitButton from './src/components/PhoneSubmitButton';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./assets/logo.png')}/>
        <PhoneInput />
        <PhoneSubmitButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8D5B9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  image: {
    marginBottom: 40
  },
});
