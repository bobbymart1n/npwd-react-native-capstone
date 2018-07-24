import React from 'react';
import { Link } from 'react-router-native';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ShareButton = () => {
  return (
    <Link
      to='/'
      component={TouchableOpacity}
      style={styles.button}>
      <Text style={styles.buttonText}>Share Number</Text>
    </Link>
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
    backgroundColor: '#4A7C59',
  },
  buttonText: {
    color: '#FAF3DD',
    fontSize: 20,
    fontFamily: 'raleway-semi-bold'
  }
});

export default ShareButton
