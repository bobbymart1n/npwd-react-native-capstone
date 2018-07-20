import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchPhoneNumber } from './../actions';
import PhoneInput from './PhoneInput';
import PhoneSubmitButton from './PhoneSubmitButton';

class Home extends React.Component {
  handleCheckPhoneNumber(number) {
    const { dispatch } = this.props;
    dispatch(fetchPhoneNumber(number));
  }
  render() {
    return (
      <View style={styles.homeContainer}>
        <Image style={styles.image} source={require('./../../assets/logo.png')}/>
        <PhoneInput />
        <PhoneSubmitButton onPhoneNumberSubmit={this.handleCheckPhoneNumber}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 40,
  },
  homeContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
});

export default connect()(Home);
