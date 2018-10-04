import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import ReportItem from './ReportItem';

class OtherReports extends Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.reports}>
        <Text style={styles.pageTitle}>Other Reports</Text>
        {this.props.reports !== '' ?
          Object.keys(this.props.reports.numbers).map(report => {
            const reportItem = this.props.reports.numbers[report];
            return <ReportItem
              key={report}
              riskType={reportItem.riskType}
              reportCount={reportItem.reportCount}
              phoneNumber={reportItem.phoneNumber}
              category={reportItem.category} />
          }) : <View style={{flex: 1}}><Text style={styles.loadingText}>Loading...</Text></View>}
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  reports: {
    width: '100%',
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    padding: 30,
  },
  loadingText: {
    marginTop: 30,
    fontSize: 18,
    fontFamily: 'open-sans-reg'
  },
  pageTitle: {
    fontSize: 36,
    fontFamily: 'raleway-semi-bold',
    textDecorationLine: 'underline'
  }
})

const mapStateToProps = state => {
  return {
    reports: state.phoneNumberResults.data
  }
}

export default connect(mapStateToProps)(OtherReports);
