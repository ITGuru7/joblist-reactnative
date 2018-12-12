import React from 'react';

import {
  Text,
  View,
  Image,
} from 'react-native';

import { Icon } from 'react-native-elements'

import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const s = bootstrapStyleSheet.create();
const c = bootstrapStyleSheet.constants;

export default class Job extends React.Component {
  render() {
    const {job} = this.props
    return (
      <View style={[s.my2, s.dFlex, s.flexRow]}>
        <Image style={{width: 90, height: 170}} source={job.image}/>

        <View style={[s.pl3, s.pr5, s.flexGrow, s.alignSelfCenter]}>
          <Text>{job.title}</Text>
          <View style={[s.dFlex, s.flexRow]}>
            <Text style={[s.mr2, {fontSize: 10}]}>{job.address.street}</Text>
            <Text style={[s.textMuted, {fontSize: 10}]}>{job.address.city}</Text>
          </View>
          <View style={[s.dFlex, s.flexRow, s.justifyContentBetween]}>
            <Text style={[s.mr4, {fontSize: 10}]}>{job.salary}</Text>
            <View style={[s.mr4, s.dFlex, s.flexRow]}>
              <Text style={[s.mr2, {fontSize: 10}]}>{job.feedback.toFixed(1)}</Text>
              <Icon name='star' size={10}/>
            </View>
            <Text style={{fontSize: 10}}>{job.pass} pass</Text>
          </View>
        </View>

        <View style={s.mr4}>
          <Icon type='evilicon' name='heart' size={20}/>
        </View>
      </View>
    );
  }
}