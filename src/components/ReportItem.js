import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const ReportItem = ({ category, phoneNumber, reportCount, riskType }) => (
  <View style={styles.reportContainer}>
    <Text style={styles.reportNumber}>{phoneNumber}</Text>
    <View style={styles.reportData}>
      <View style={styles.reportDataItem}>
        <Text style={styles.reportResultTitle}>Risk Type:</Text>
        <Text style={styles.reportResultText}>{riskType}</Text>
      </View>
      <View style={styles.reportDataItem}>
        <Text style={styles.reportResultTitle}>Category:</Text>
        <Text style={styles.reportResultText}>{category}</Text>
      </View>
      <View style={styles.reportDataItem}>
        <Text style={styles.reportResultTitle}>Report Count:</Text>
        <Text style={styles.reportResultText}>{reportCount}</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  reportData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reportNumber: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    marginBottom: 20
  },
  reportResultText: {
    fontSize: 15,
    fontFamily: 'raleway-bold'
  },
  reportResultTitle: {
    fontSize: 13,
    fontFamily: 'raleway-bold',
    marginBottom: 10
  },
  reportDataItem: {
    alignItems: 'center',
    flex: 1
  },
  reportContainer: {
    backgroundColor: '#7EB2DD',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 8,
    padding: 10,
  }
})

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
