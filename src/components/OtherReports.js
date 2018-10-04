import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import ReportItem from './ReportItem';

class OtherReports extends Component {
  render() {
    return (
      <View className={styles.reports}>
        {this.props.reports !== '' ?
          Object.keys(this.props.reports.numbers).map(report => {
            const reportItem = this.props.reports.numbers[report];
            return <ReportItem
              riskType={reportItem.riskType}
              reportCount={reportItem.reportCount}
              phoneNumber={reportItem.phoneNumber}
              category={reportItem.category} />
        }) : "Loading..."}
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

const mapStateToProps = state => {
  return {
    reports: state.phoneNumberResults.data
  }
}

export default connect(mapStateToProps)(OtherReports);
