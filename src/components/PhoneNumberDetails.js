import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import ShareButton from './ShareButton';

const PhoneNumberDetails = (props) => {
    const updatedPhoneNumber = () => {
      let areaCode = ['('];
      let firstThree = [];
      let lastFour = [];
      props.phoneNumberResponse.phone_number.split('').map((number, index) => {
        index < 3 ? areaCode.push(number) : index > 2 && index < 6 ? firstThree.push(number) : lastFour.push(number);
      })
      areaCode.push(')');
      firstThree.push('-');
      let newPhoneNumber = areaCode.concat(firstThree).concat(lastFour).join('');
      return newPhoneNumber;
    }
    const addSpaceToCategory = (str) => {
      str = props.phoneNumberResponse.reputation_details.type;
      let strArr = str.split('').map((letter, index) => {
        return letter === letter.toUpperCase() ? ' ' + letter : letter
      });
      const newStr = strArr.join('').trim()
      return newStr
    }
    const phoneNumberData = () => {
      return {
        phoneNumber: updatedPhoneNumber(),
        riskType: addSpaceToCategory(),
        reportCount: props.phoneNumberResponse.report_count,
        category: props.phoneNumberResponse.reputation_details.category,
      }
    }
    return (
      <View style={styles.shareButton}>
        <Text style={styles.phoneNumber}>
        {props.phoneNumberResponse !== '' ? updatedPhoneNumber() : null}
        </Text>
        <View style={styles.detailsContainer}>
          {props.phoneNumberResponse !== '' ?
            <View style={styles.flex}>
              <View style={styles.phoneRep}>
                <View style={styles.detailInfo}>
                  <Text style={styles.title}>Reputation</Text>
                  <Text style={styles.number}>{props.phoneNumberResponse.reputation_level}</Text>
                </View>
                <View style={styles.detailInfo}>
                  <Text style={styles.title}>Score</Text>
                  <Text style={styles.number}>{props.phoneNumberResponse.reputation_details.score}</Text>
                </View>
                <View style={styles.detailInfo}>
                  <Text style={styles.title}>Report Count</Text>
                  <Text style={styles.number}>{props.phoneNumberResponse.report_count}</Text>
                </View>
              </View>
              <Text style={styles.scamType}>{props.phoneNumberResponse.reputation_details.category}</Text>
              <View style={styles.detailInfo}>
                <Text style={styles.numberIs}>This number is a</Text>
                <Text style={styles.riskType}>{addSpaceToCategory()}</Text>
              </View>
            </View>
            : <View style={styles.flex}><Text>Loading...</Text></View>}
        </View>
        <ShareButton style={styles.actualShareButton} phoneNumberDetails={phoneNumberData} />
      </View>
  );
}

const styles = StyleSheet.create({
  phoneNumber: {
    fontSize: 50,
    fontFamily: 'open-sans-extra-bold',
    color: '#1B4965',
    marginBottom: 35,
    marginTop: 30
  },
  number: {
    fontFamily: 'raleway-extra-light',
    fontSize: 36
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 14
  },
  flex: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  numberIs: {
    fontFamily: 'raleway-extra-light',
    fontSize: 24
  },
  detailInfo: {
    display: 'flex',
    alignItems: 'center'
  },
  phoneRep: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    width: '100%',
    padding: 20,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 8,
    backgroundColor: '#7EB2DD'
  },
  scamType: {
    width: '100%',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
    fontFamily: 'raleway-semi-bold',
    fontSize: 48
  },
  riskType: {
    fontFamily: 'raleway-semi-bold',
    fontSize: 36
  },
  shareButton: {
    width: '100%',
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 30
  },
  actualShareButton: {
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
    phoneNumberResponse: state.phoneNumberDetails.data
  }
}

export default connect(mapStateToProps)(PhoneNumberDetails);
