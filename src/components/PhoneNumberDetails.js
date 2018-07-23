import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

const PhoneNumberDetails = (props) => {
  console.log(props.testNumber['5558675309']);
  const updatedPhoneNumber = () => {
    let areaCode = ['('];
    let firstThree = [];
    let lastFour = [];
    props.testNumber['5558675309'].phoneNumber.toString().split('').map((number, index) => {
      index < 3 ? areaCode.push(number) : index > 2 && index < 6 ? firstThree.push(number) : lastFour.push(number);
    });
    areaCode.push(')');
    firstThree.push('-');
    let newPhoneNumber = areaCode.concat(firstThree).concat(lastFour).join('');
    return console.log(newPhoneNumber);
  }
  return (
    <View>
      <Text>
        {updatedPhoneNumber()}
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
