import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class OtherReports extends Component {
  render() {
    return (
      <View className={styles.reports}>
        <Text>Test</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  reports: {
    flex: 1,
    marginTop: 30
  }
})

export default OtherReports;
