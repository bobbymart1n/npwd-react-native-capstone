import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';

const PhoneInput = (props) => {
  return (
    <TextInput
      onChangeText={(input) => props.onPhoneNumberSubmit(parseInt(input))}
      style={styles.numberInput}
      placeholder='Enter a phone number'
      keyboardType='phone-pad'
      textContentType={'telephoneNumber'}></TextInput>
  )
}

PhoneInput.propTypes = {
  onPhoneNumberSubmit: PropTypes.func
}

const styles = StyleSheet.create({
  numberInput: {
    borderColor: '#1B4965',
    borderWidth: 1,
    fontFamily: 'open-sans-light',
    height: 50,
    width: '100%',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20
  },
})

export default PhoneInput;
