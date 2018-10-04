import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const ReportItem = ({ category, phoneNumber, reportCount, riskType }) => (
  <View>
    <Text>{category}</Text>
    <Text>{phoneNumber}</Text>
    <Text>{reportCount}</Text>
    <Text>{riskType}</Text>
  </View>
)

ReportItem.propTypes = {
  category: PropTypes.string,
  phoneNumber: PropTypes.string.isRequired,
  reportCount: PropTypes.number.isRequired,
  riskType: PropTypes.string.isRequired
}
ReportItem.defaultProps = {
  category: null,
}

export default ReportItem;
