import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchNumber } from './../actions';
import PhoneInput from './PhoneInput';
import PhoneSubmitButton from './PhoneSubmitButton';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <Image style={styles.image} source={require('./../../assets/logo.png')}/>
        <PhoneInput />
        <PhoneSubmitButton onPhoneNumberSubmit={this.props.handleCheckPhoneNumber}/>
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

Home.propTypes = {
  handleCheckPhoneNumber: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCheckPhoneNumber() {
      dispatch(fetchNumber());
    }
  }
}
const mapStateToProps = state => {
  return {
    testNumber: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
