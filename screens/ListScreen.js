import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import { Icon } from 'react-native-elements'
import Colors from '../constants/Colors'

import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const s = bootstrapStyleSheet.create();
const c = bootstrapStyleSheet.constants;

import JobList from '../components/JobList'

export default class ListScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  renderHeaderButton = (title, active) => (
    <TouchableHighlight underlayColor='white'>
      <View style={[styles.headerButton, (active?{backgroundColor: Colors.purple}:s.bgWhite)]}>
        <Text style={[styles.headerButtonText, {color: (active?'white':Colors.purple)}]}>{title}</Text>
      </View>
    </TouchableHighlight>
  )

  renderHeader = () => (
    <View style={[s.mb5, s.alignSelfCenter, s.bgWhite, s.dFlex, s.flexRow]} noShadow>
      {this.renderHeaderButton('Senaste', true)}
      {this.renderHeaderButton('Flest pass', false)}
      {this.renderHeaderButton('Bast betalda', false)}
      {this.renderHeaderButton('Favorite', false)}
    </View>
  )

  render() {
    return (
      <View style={[s.flexGrow, s.pt5, s.bgWhite, s.dFlex]}>
        {this.renderHeader()}

        <View style={s.flexGrow}>
          <View style={[s.px4, s.mb4, s.dFlex, s.flexRow, s.justifyContentBetween, s.alignItemsCenter]}>
            <View>
              <Text style={{fontSize: 20, color: 'rgb(78,84,109)'}}>Uppdrag</Text>
              <Text style={[s.textMuted, {fontSize: 10}]}>Leg.sjukskoterska</Text>
            </View>
            <View>
              <TouchableHighlight underlayColor='white'>
                <View style={[s.dFlex, s.justifyContentCenter, s.alignItemsCenter, {
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: Colors.purple,
                }]}>
                  <Icon type='material-community' name='map-outline' color='white' size={15}/>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <JobList/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerButton: {
    width: 70,
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.purple,
  },
  headerButtonText: {
    padding: 5,
    fontSize: 10,
  },
});
