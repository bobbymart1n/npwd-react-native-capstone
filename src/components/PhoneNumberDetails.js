import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

const PhoneNumberDetails = (props) => {
  console.log(props.testNumber['5558675309']);
  return (
    <View>
      <Text>
        {props.testNumber['5558675309'].phoneNumber.toString().split('').map((number, index) => {
          
        }).join('')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

const mapStateToProps = state => {
  return {
    testNumber: state
  }
}

export default connect(mapStateToProps)(PhoneNumberDetails);
