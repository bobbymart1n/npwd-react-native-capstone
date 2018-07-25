import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import ShareButton from './ShareButton';

class PhoneNumberDetails extends React.Component {
  updatedPhoneNumber = () => {
    let areaCode = ['('];
    let firstThree = [];
    let lastFour = [];
    this.props.testNumber['5558675309'].phoneNumber.toString().split('').map((number, index) => {
      index < 3 ? areaCode.push(number) : index > 2 && index < 6 ? firstThree.push(number) : lastFour.push(number);
    });
    areaCode.push(')');
    firstThree.push('-');
    let newPhoneNumber = areaCode.concat(firstThree).concat(lastFour).join('');
    return newPhoneNumber;
  }
  componentDidMount() {
    this.updatedPhoneNumber();
  }
  render() {
    return (
      <View style={styles.shareButton}>
      <Text style={styles.phoneNumber}>
      </Text>
      {Object.keys(this.props.testNumber).map((numberId, index) => {
        let number = this.props.testNumber[numberId];

        return <View style={styles.detailsContainer} key={index}>
        <View style={styles.phoneRep}>
        <View style={styles.detailInfo}>
        <Text>Reputation</Text>
        <Text>{number.reputationLevel}</Text>
        </View>
        <View style={styles.detailInfo}>
        <Text>Score</Text>
        <Text>{number.reputationDetails.score}</Text>
        </View>
        <View style={styles.detailInfo}>
        <Text>Report Count</Text>
        <Text>{number.reportCount}</Text>
        </View>
        </View>
        <Text style={styles.scamType}>{number.reputationDetails.category}</Text>
        <View style={styles.detailInfo}>
        <Text>This number is a</Text>
        <Text>{number.reputationDetails.type}</Text>
        </View>
        </View>
      })}
      <ShareButton/>
      </View>
    );
  }
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
    width: '100%'
  }
});

PhoneNumberDetails.propTypes = {
  testNumber: PropTypes.object
}

const mapStateToProps = state => {
  return {
    testNumber: state.phoneNumberDetails
  }
}

export default connect(mapStateToProps)(PhoneNumberDetails);
