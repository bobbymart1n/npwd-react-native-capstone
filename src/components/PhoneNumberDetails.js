import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import ShareButton from './ShareButton';

const PhoneNumberDetails = (props) => {
    const updatedPhoneNumber = () => {
      let areaCode = ['('];
      let firstThree = [];
      let lastFour = [];
      Object.keys(props.testNumber.testNumber).map((numberId) => {
        let newNumber = props.testNumber.testNumber[numberId];
        return newNumber.phoneNumber.toString().split('').map((number, index) => {
          index < 3 ? areaCode.push(number) : index > 2 && index < 6 ? firstThree.push(number) : lastFour.push(number);
        });
      })
      areaCode.push(')');
      firstThree.push('-');
      let newPhoneNumber = areaCode.concat(firstThree).concat(lastFour).join('');
      return newPhoneNumber;
    }
    return (
      <View style={styles.shareButton}>
        <Text style={styles.phoneNumber}>
        {props.testNumber !== '' ? updatedPhoneNumber() : null}
        </Text>
        {Object.keys(props.testNumber).map((numberId, index) => {
          let number = props.testNumber[numberId];
          return Object.keys(number).map((data) => {
            let numberResult = number[data];
            return <View style={styles.detailsContainer} key={index}>
              <View style={styles.phoneRep}>
                <View style={styles.detailInfo}>
                  <Text>Reputation</Text>
                  <Text>{numberResult.reputationLevel}</Text>
                </View>
                <View style={styles.detailInfo}>
                  <Text>Score</Text>
                  <Text>{numberResult.reputationDetails.score}</Text>
                </View>
                <View style={styles.detailInfo}>
                  <Text>Report Count</Text>
                  <Text>{numberResult.reportCount}</Text>
                </View>
              </View>
              <Text style={styles.scamType}>{numberResult.reputationDetails.category}</Text>
              <View style={styles.detailInfo}>
                <Text>This number is a</Text>
                <Text>{numberResult.reputationDetails.type}</Text>
              </View>
            </View>
          })
        })}
        <ShareButton/>
      </View>
  );
}

const styles = StyleSheet.create({
  phoneNumber: {
    fontSize: 50,
    marginBottom: 30,
    fontFamily: 'open-sans-extra-bold',
    color: '#4A7C59'
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
  },
  shareButton: {
    width: '100%',
    backgroundColor: '#FAF3DD',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 30
  }
});

const mapStateToProps = state => {
  return {
    testNumber: state.phoneNumberDetails.data
  }
}

export default connect(mapStateToProps)(PhoneNumberDetails);
