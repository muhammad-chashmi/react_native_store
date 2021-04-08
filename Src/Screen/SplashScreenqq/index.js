import React, { Component } from 'react';
import {View,Text,Icon} from 'native-base';
import {Button, Image, StyleSheet} from 'react-native';

export default class HelpScreen extends Component {
  
  static navigationOptions={
    tabBarIcon:({tintColor})=>(
      <Icon name="bulb" style={{fontSize: 20,color:tintColor}}/>
    )
  }

//        <Image source={require('../../../Assets/icon.png')} style={styles.searchImage} />  


	
ShowAlertWithDelay=()=>{
 
    setTimeout(function(){
 
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
     // Alert.alert("Alert Shows After 5 Seconds of Delay.")
     this.props.navigation.navigate('Help')

    }, 5000);
  }

componentDidMount() {
    setTimeout(() => {
                     this.props.navigation.navigate('Help')

    }, 2000);
  }

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image source={require('./vellikLogo.png')} style={styles.searchImage} />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchImage: {
        width: 150,
        height: 150
    },
    searchInput: {
        ...allStyle.text,
        fontSize: 13,
        textAlign: 'right',
        textAlignVertical: 'center',
        padding: 0,
        ...headerStyle.contentColor
    }
})