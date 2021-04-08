/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import React, { Component } from 'react';
import { View, Text, Icon, Container } from 'native-base';
import { I18nManager } from 'react-native';
import allStyle from './Src/Config/Styles/allStyle';
import Navigations from './Src/Config/Navigations';
import { Provider } from 'react-redux';
import store from './Src/Redux/store'
//export default App;

export default class HomeScreen extends Component {

  // static navigationOptions={
  //   tabBarIcon:({tintColor})=>(
  //     <Icon name="home" style={{fontSize: 20,color:tintColor}}/>
  //   )
  // }

  render() {
    return (


      <Container>
        <Provider store={store}>
          <Navigations />
        </Provider>
      </Container>

      // <View style={allStyle.centerContainer}>
      //   <Text>Home</Text>
      // </View>
    );
  }
}