import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ShareButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Share Number</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginTop: 40,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#1B4965',
  },
  buttonText: {
    color: '#FAF3DD',
    fontSize: 20,
    fontFamily: 'raleway-semi-bold'
  }
});

export default ShareButton
