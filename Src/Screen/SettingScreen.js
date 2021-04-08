import React, { Component } from 'react';
import {View,Text,Icon} from 'native-base';

export default class SettingScreen extends Component {
  
  static navigationOptions={
    tabBarIcon:({tintColor})=>(
      <Icon name="settings" style={{fontSize: 20,color:tintColor}}/>
    )
  }

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Settings</Text>
      </View>
    );
  }
}
