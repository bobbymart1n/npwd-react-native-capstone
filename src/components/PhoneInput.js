import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const PhoneInput = () => {
  return (
    <TextInput
      style={styles.numberInput}
      placeholder='Enter a phone number'
      keyboardType='numeric'></TextInput>
  )
}

const styles = StyleSheet.create({
  numberInput: {
    borderColor: '#4A7C59',
    borderWidth: 1,
    fontFamily: 'raleway-extra-light',
    height: 50,
    width: '100%',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20
  },
})

export default PhoneInput;
