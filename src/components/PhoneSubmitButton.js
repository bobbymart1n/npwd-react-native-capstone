import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const PhoneSubmitButton = () => {
  return (
    <TouchableOpacity
      style={styles.button}>
      <Text style={styles.buttonText}>Who's Calling?</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#4A7C59',
  },
  buttonText: {
    color: '#FAF3DD',
    fontSize: 20,
  }
})

export default PhoneSubmitButton;
