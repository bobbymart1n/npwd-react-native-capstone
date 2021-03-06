import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const PhoneSubmitButton = (props) => {
  function handleSubmit() {
    props.onPhoneNumberSubmit(props.statePhoneNumber);
    Actions.details()
  }
  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit} type='submit'>
      <Text style={styles.buttonText}>Who's Calling?</Text>
    </TouchableOpacity>
  )
}

PhoneSubmitButton.propTypes = {
  onPhoneNumberSubmit: PropTypes.func,
  statePhoneNumber: PropTypes.number,
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
    backgroundColor: '#1B4965',
  },
  buttonText: {
    color: '#FAF3DD',
    fontSize: 20,
    fontFamily: 'raleway-semi-bold'
  }
})

export default PhoneSubmitButton;
