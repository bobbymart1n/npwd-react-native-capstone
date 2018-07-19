import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import PhoneInput from './PhoneInput';
import PhoneSubmitButton from './PhoneSubmitButton';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Image style={styles.image} source={require('./../../assets/logo.png')}/>
        <PhoneInput />
        <PhoneSubmitButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 40
  },
});
