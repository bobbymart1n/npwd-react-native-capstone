import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchNumber } from './../actions';
import { phoneNumberEntry } from './../actions';
import PhoneInput from './PhoneInput';
import PhoneSubmitButton from './PhoneSubmitButton';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <Image style={styles.image} source={require('./../../assets/logo.png')}/>
        <PhoneInput onPhoneNumberSubmit={this.props.handleInputText} />
        <PhoneSubmitButton
          statePhoneNumber={this.props.phoneNumber}
          onPhoneNumberSubmit={this.props.handleCheckPhoneNumber}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 40,
  },
  inputAndButton: {
    height: 'auto'
  },
  homeContainer: {
    display: 'flex',
    backgroundColor: '#F9F9F9',
    padding: 30,
    flex: 1,
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
    handleInputText(phoneNumber) {
      dispatch(phoneNumberEntry(phoneNumber));
    },
    handleCheckPhoneNumber(number) {
      dispatch(fetchNumber(number));
    }
  }
}
const mapStateToProps = state => {
  return {
    testNumber: state,
    phoneNumber: state.phoneNumber
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
