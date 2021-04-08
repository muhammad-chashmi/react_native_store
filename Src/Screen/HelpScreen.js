import React, { Component } from 'react';
import {View,Text,Icon} from 'native-base';
import {Button } from 'react-native';

export default class HelpScreen extends Component {
  
  static navigationOptions={
        headerLeft: null,
        tabBarIcon:({tintColor})=>(
      <Icon name="bulb" style={{fontSize: 20,color:tintColor}}/>
    )
  }

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Help</Text>

        <Button
          title="Go to Help"
          onPress={
            ()=>{
              this.props.navigation.navigate('Home')
            }
          }
        />

      </View>
    );
  }
}
