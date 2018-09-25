import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { requestResults } from './../actions';

const ShareButton = (props) => {
  const handleShareResults = () => {
    props.handleRequestResults();
    Actions.reports();
  }
  return (
    <TouchableOpacity style={styles.button} onPress={() => handleShareResults()}>
      <Text style={styles.buttonText}>Share Number</Text>
    </TouchableOpacity>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    handleRequestResults() {
      dispatch(requestResults());
    }
  }
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginTop: 40,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#1B4965',
  },
  buttonText: {
    color: '#FAF3DD',
    fontSize: 20,
    fontFamily: 'raleway-semi-bold'
  }
});

export default connect(null, mapDispatchToProps)(ShareButton)
