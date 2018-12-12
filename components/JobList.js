import React from 'react';

import {
  ScrollView,
  View,
} from 'react-native';

import Job from './Job'

var joblist = [
  { image: require('../assets/images/job1.png'), title: 'S:t Eriks Ogonsjukhus', address: { street: 'Vardavdeiningen', city: 'Stockholm' }, salary: '292 ~ 356kr/tim', feedback: 4.0, pass: 18 },
  { image: require('../assets/images/job2.png'), title: 'Sodersjukhuset', address: { street: 'Akuten', city: 'Stockholm' }, salary: '307 ~ 369kr/tim', feedback: 3.0, pass: 5 },
  { image: require('../assets/images/job3.png'), title: 'Praktikertjanst', address: { street: 'Lidingo', city: 'Stockholm' }, salary: '307 ~ 369kr/tim', feedback: 3.0, pass: 5 }
];

export default class JobList extends React.Component {

  renderJobList() {
    return joblist.map(function(job, i){
      return(
        <View key={i}>
          <Job job={job}/>
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView style={{
        flex: 1,
      }}>
        {this.renderJobList()}
      </ScrollView>
    );
  }
}