import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

const PhoneNumberDetails = (props) => {
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
    return newPhoneNumber;
  }
  return (
    <View>
      <Text style={styles.phoneNumber}>
        {updatedPhoneNumber()}
      </Text>
      <View style={styles.detailsContainer}>
        <View style={styles.phoneRep}>
          <View style={styles.detailInfo}>
            <Text>Reputation</Text>
            <Text>3</Text>
          </View>
          <View style={styles.detailInfo}>
            <Text>Score</Text>
            <Text>75</Text>
          </View>
          <View style={styles.detailInfo}>
            <Text>Report Count</Text>
            <Text>8</Text>
          </View>
        </View>
        <Text style={styles.scamType}>IRS Scam</Text>
        <View style={styles.detailInfo}>
          <Text>This number is a</Text>
          <Text>RISK</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  phoneNumber: {
    fontSize: 50,
    marginBottom: 30
  },
  detailInfo: {
    display: 'flex',
    alignItems: 'center'
  },
  phoneRep: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    display: 'flex',
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#FAF3DD'
  },
  scamType: {
    width: '100%',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50
  }
});

const mapStateToProps = state => {
  return {
    testNumber: state
  }
}

export default connect(mapStateToProps)(PhoneNumberDetails);
